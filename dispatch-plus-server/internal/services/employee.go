package services

import (
	"context"
	"dispatch-plus-server/pkg/account"
	"dispatch-plus-server/pkg/base"
	"errors"
	"log"
)

func (s *Server) InitializeEmployeeService() {
	account.RegisterAccountsServer(s.RpcServer, s)
}

func (s *Server) Login(ctx context.Context, req *account.LoginRequest) (*account.LoginResponse, error) {
	user, err := s.Store.Employee().GetEmployee(ctx, req.Username)
	if err != nil {
		return nil, err
	}

	log.Printf("User: %s\nPassword: %s", req.Username, req.Password)
	if user.Password != req.Password {
		return nil, errors.New("Authentication failed: Invalid Username or Password")
	}

	return &account.LoginResponse{
		UserData: user,
	}, nil
}

func (s *Server) Logout(context.Context, *base.Empty) (*base.Empty, error) {
	log.Print("Logout Called")
	return &base.Empty{}, nil
}
