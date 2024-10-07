package main

import (
	"context"
	"dispatch-plus-server/pkg/account"
	"dispatch-plus-server/pkg/base"
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
	lis, err := net.Listen("tcp", ":9001")
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
