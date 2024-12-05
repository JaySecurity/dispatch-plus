package main

import (
	"bufio"
	"fmt"
	"io"
	"io/fs"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strings"
)

func main() {
	protoFiles, _ := filepath.Glob("proto/*.proto")

	// Generating Go proto files
	if err := runCommand("protoc -I=/usr/local/include -I proto --go_out=. --go-grpc_out=. " + strings.Join(protoFiles, " ")); err != nil {
		log.Fatal(err)
	}

	_ = filepath.Walk("./dispatch-plus-server/pkg", func(path string, info fs.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}

		data, err := os.ReadFile(path)
		if err != nil {
			fmt.Println("Error Reading File")
			panic(err)
		}

		res := addYamlAndBsonTag(string(data))
		res = renameBsonID(res)
		res = removeOmitEmptyFromBooleans(res)
		return os.WriteFile(path, []byte(res), 0644)
	})

	// Generating TS proto files
	if err := runCommand("protoc --plugin=./dispatch-plus-client/node_modules/.bin/protoc-gen-ts_proto -I proto --ts_proto_out=./dispatch-plus-client/electron/pkg/ --ts_proto_opt=outputServices=grpc-js,esModuleInterop=true " + strings.Join(protoFiles, " ")); err != nil {
		log.Fatal(err)
	}
}

func processClient(clientPath string) {
	if _, err := os.Stat(clientPath); !os.IsNotExist(err) {
		_ = os.RemoveAll(clientPath + "pkg/")

		if err != nil {
			fmt.Println("Invalid Path")
		}
		if err := runCommand("cp -r ./dispatch-plus-server/pkg " + clientPath); err != nil {
			log.Fatal(err)
		}

		_ = filepath.Walk(clientPath+"pkg", func(path string, info fs.FileInfo, err error) error {
			if info.IsDir() {
				return nil
			}

			data, err := os.ReadFile(path)
			if err != nil {
				panic(err)
			}

			res := strings.ReplaceAll(string(data), "server/pkg", "client/pkg")

			return os.WriteFile(path, []byte(res), 0644)
		})
	}
}

var (
	matchStringMethod     = regexp.MustCompile(`(?m)func .*$\n(.+\n)+}`)
	matchDeprecatedString = regexp.MustCompile(`// Deprecated: .*`)
	matchDescriptor       = regexp.MustCompile(`(?m)var File_.*_proto .*$\n(.*\n)*`)
	matchProtoMessage     = regexp.MustCompile(`func .* ProtoMessage\(\) {}`)
	matchProtoTag         = regexp.MustCompile(`(?mU)protobuf:(.*)\s`)
	matchBsonTag          = regexp.MustCompile(`(?mU)bson:\"(.*)\"`)
	matchProtoExt         = regexp.MustCompile(`(?m)var file_.*_proto_extTypes(.*\n)*`)
)

func runCommand(command string) error {
	args := strings.Split(command, " ")
	cmd := exec.Command(args[0], args[1:]...)

	outPipe, _ := cmd.StdoutPipe()
	errPipe, _ := cmd.StderrPipe()

	cmdReader := io.MultiReader(outPipe, errPipe)
	scanner := bufio.NewScanner(cmdReader)
	done := make(chan bool)
	go func() {
		for scanner.Scan() {
			fmt.Printf(scanner.Text() + "\n")
		}
		done <- true
	}()

	_ = cmd.Start()
	<-done
	return cmd.Wait()
}

// renameBsonID renames the tag for ObjectID to _id
func renameBsonID(data string) string {
	re := regexp.MustCompile(`(?sU)(ID.*\*base\.ObjectID.*bson:)"(id)(,omitempty")`)
	return re.ReplaceAllString(data, "$1\"_id$3")
}

// removeOmitEmptyFromBooleans remove `omitempty` from bson tag, if this is boolean value
func removeOmitEmptyFromBooleans(data string) string {
	re := regexp.MustCompile(`(?sU)(\sbool\s+.protobuf.*bson:.*)(,omitempty)"`)
	return re.ReplaceAllString(data, "$1\"")
}

func removeOmitEmptyFromField(data, fieldName string) string {
	// This regex pattern targets a Go struct field declaration by name with `omitempty` in its bson tag.
	// Adjust the pattern to match the specific syntax of your generated Go code.
	pattern := fmt.Sprintf(`(?sU)(\s%s\s+.*protobuf.*bson:.*)(,omitempty)"`, regexp.QuoteMeta(fieldName))
	re := regexp.MustCompile(pattern)
	return re.ReplaceAllString(data, "$1\"")
}

// add OmitNil to field
func addOmitNilToField(data, fieldName string) string {
	pattern := fmt.Sprintf(`(?sU)(\s%s\s+.*protobuf.*bson:")(.*)"`, regexp.QuoteMeta(fieldName))
	re := regexp.MustCompile(pattern)
	return re.ReplaceAllString(data, "$1$2,omitnil\"")
}

// addYamlAndBsonTag Adding an attribute for YAML and Bson
func addYamlAndBsonTag(data string) string {
	re := regexp.MustCompile(`(?sU)json:"(.*)"`)
	return re.ReplaceAllStringFunc(data, func(s string) string {
		re := regexp.MustCompile("\".*\"")
		value := strings.ReplaceAll(re.FindString(s), "\"", "")
		return fmt.Sprintf("json:\"%s\" yaml:\"%s\" bson:\"%s\"", value, value, toSnakeCase(value))
	})
}

var (
	matchFirstCap = regexp.MustCompile("(.)([A-Z][a-z]+)")
	matchAllCap   = regexp.MustCompile("([a-z\\d])([A-Z])")
)

func toSnakeCase(str string) string {
	snake := matchFirstCap.ReplaceAllString(str, "${1}_${2}")
	snake = matchAllCap.ReplaceAllString(snake, "${1}_${2}")
	return strings.ToLower(snake)
}
