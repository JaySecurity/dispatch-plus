package services

import (
	"dispatch-plus-server/pkg/account"
	"dispatch-plus-server/store"

	"google.golang.org/grpc"
)

type Server struct {
	Store     store.IStore
	RpcServer *grpc.Server

	account.UnimplementedAccountsServer
}

func NewServer(store store.IStore, rpcServer *grpc.Server) *Server {
	return &Server{
		Store:     store,
		RpcServer: rpcServer,
	}
}

// func (s *Server) Login(context.Context, *account.LoginRequest) (*account.LoginResponse, error) {
// 	log.Print("Login Called")
// 	return nil, nil
// }

// func (s *Server) Logout(context.Context, *base.Empty) (*base.Empty, error) {
// 	log.Print("Logout Called")
// 	return &base.Empty{}, nil
// }
