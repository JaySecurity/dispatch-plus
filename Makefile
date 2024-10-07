build_proto:
	go run ./dispatch-plus-server/cmd/gen-proto/gen-proto.go

serve:
	go run ./dispatch-plus-server/cmd/server.go

run_client: 
	go run ./dispatch-plus-client/cmd/client.go
	

run_dev:
	go run ./dispatch-plus-server/cmd/server.go && go run ./dispatch-plus-client/cmd/client.go
