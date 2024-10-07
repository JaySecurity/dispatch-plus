package main

import (
	"dispatch-plus-server/internal/config"
	"dispatch-plus-server/pkg/account"
	"dispatch-plus-server/pkg/base"
	"dispatch-plus-server/store"
	"fmt"
	"strconv"

	"context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct {
	account.UnimplementedAccountsServer
}

func (s *server) Login(context.Context, *account.LoginRequest) (*account.LoginResponse, error) {
	log.Print("Login Called")
	return nil, nil
}

func (s *server) Logout(context.Context, *base.Empty) (*base.Empty, error) {
	log.Print("Logout Called")
	return &base.Empty{}, nil
}

func main() {
	cfg := config.Init()
	store := store.NewStore(cfg)
	defer store.Db.Close()

	host := fmt.Sprintf(":%s", strconv.FormatInt(int64(cfg.Port), 10))

	lis, err := net.Listen("tcp", host)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// create a new grpc server
	grpcServer := grpc.NewServer()

	// register our server struct as a handle for the AccountsService rpc calls that come in through grpcServer
	account.RegisterAccountsServer(grpcServer, &server{})

	// Serve traffic
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}
