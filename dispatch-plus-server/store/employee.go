package store

import (
	"context"
	"database/sql"
	"dispatch-plus-server/internal/config"
	"log"
)

type EmployeeStore struct {
	db     *sql.DB
	config *config.Config
}

//go:generate mockery -name EmployeeStoreInterface
type EmplpoyeeStoreInterface interface {
	GetEmployee(ctx context.Context, id string) string
}

func NewEmployeeStore(config *config.Config, db *sql.DB) *EmployeeStore {
	s := new(EmployeeStore)
	s.db = db
	s.config = config

	return s
}

func (s *EmployeeStore) GetEmployee(ctx context.Context, id string) string {
	log.Printf("Get Employee: %v", id)
	return id
}
