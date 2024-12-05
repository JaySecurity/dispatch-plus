package store

import (
	"context"
	"database/sql"
	"dispatch-plus-server/internal/config"
	"dispatch-plus-server/pkg/account"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

type EmployeeStoreInterface interface {
	GetEmployee(ctx context.Context, username string) (*account.User, error)
	GetEmployees(ctx context.Context) ([]*account.User, error)
	Create(ctx context.Context, id string, user *account.User) (*account.User, error)
}

type IStore interface {
	Employee() EmployeeStoreInterface
}

type Store[T any] struct {
	config   *config.Config
	Database T

	EmployeeStore EmployeeStoreInterface
}

func NewStore(config *config.Config) *Store[*sql.DB] {
	connStr := fmt.Sprintf("postgres://%s:%s@%s:5432/test?sslmode=disable", config.DbUser, config.DbPass, config.DbHost)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Error connecting to postgres: %v", err)
	}

	return &Store[*sql.DB]{
		config:   config,
		Database: db,

		EmployeeStore: NewEmployeeStore(config, db),
	}
}

func NewLocalStore(config *config.Config) *Store[map[string]*account.User] {
	db := make(map[string]*account.User)

	return &Store[map[string]*account.User]{
		config:   config,
		Database: db,

		EmployeeStore: NewLocalEmployeeStore(config, db),
	}
}

func (s *Store[T]) Employee() EmployeeStoreInterface {
	return s.EmployeeStore
}
