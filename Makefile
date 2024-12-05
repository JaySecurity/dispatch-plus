build_proto:
	go run ./dispatch-plus-server/cmd/gen-proto/gen-proto.go

serve:
	go run ./dispatch-plus-server/cmd/server.go
	

