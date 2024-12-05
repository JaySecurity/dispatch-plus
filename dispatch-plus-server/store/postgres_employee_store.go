package store

import (
	"context"
	"database/sql"
	"dispatch-plus-server/internal/config"
	"dispatch-plus-server/pkg/account"
	"log"
)

type EmployeeStore struct {
	db     *sql.DB
	config *config.Config
}

func NewEmployeeStore(config *config.Config, db *sql.DB) EmployeeStoreInterface {
	s := new(EmployeeStore)
	s.db = db
	s.config = config

	return s
}

func (s *EmployeeStore) GetEmployee(ctx context.Context, username string) (*account.User, error) {
	log.Printf("Get Employee Postgres: %v", username)
	return nil, nil
}

func (s *EmployeeStore) GetEmployees(ctx context.Context) ([]*account.User, error) {
	log.Printf("Get Employees Local")
	users := []*account.User{}
	return users, nil
}

func (s *EmployeeStore) Create(ctx context.Context, id string, user *account.User) (*account.User, error) {
	user.Id = id
	return user, nil
}
