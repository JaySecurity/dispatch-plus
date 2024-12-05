package main

import (
	"context"
	"dispatch-plus-server/internal/config"
	"dispatch-plus-server/internal/services"
	"dispatch-plus-server/pkg/account"
	"dispatch-plus-server/store"
	"fmt"
	"log"
	"net"
	"strconv"

	"google.golang.org/grpc"
)

func main() {
	// create Store
	var datastore store.IStore
	cfg := config.Init()
	if cfg.Environment == "local" {
		log.Printf("Env Local: %v", cfg.Environment)
		datastore = store.NewLocalStore(cfg)
		populateData(datastore)
	} else {
		log.Printf("Env: %v", cfg.Environment)
		datastore = store.NewStore(cfg)
	}

	// create a new grpc server
	grpcServer := grpc.NewServer()
	server := services.NewServer(datastore, grpcServer)
	host := fmt.Sprintf("%s:%s", cfg.Host, strconv.FormatInt(int64(cfg.Port), 10))
	lis, err := net.Listen("tcp", host)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	log.Println("Listening on host: ", host)

	// register our Services rpc calls that come in through grpcServer
	server.InitializeEmployeeService()

	// Serve traffic
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}

func populateData(datastore store.IStore) {
	datastore.Employee().Create(context.Background(), "3452-id234", &account.User{Username: "Security", Password: "passw0rd"})
	datastore.Employee().Create(context.Background(), "3452-id235", &account.User{Username: "Bubba", Password: "passw0rd"})
	datastore.Employee().Create(context.Background(), "3452-id236", &account.User{Username: "Jim", Password: "passw0rd"})
	datastore.Employee().Create(context.Background(), "3452-id237", &account.User{Username: "Bob", Password: "passw0rd"})
}
