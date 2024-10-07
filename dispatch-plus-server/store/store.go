package store

import (
	"database/sql"
	"dispatch-plus-server/internal/config"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

type Store struct {
	config *config.Config

	Db *sql.DB

	Employee EmplpoyeeStoreInterface
}

func NewStore(config *config.Config) *Store {
	s := new(Store)
	s.config = config
	s.Db = s.ConnectDatabase()

	s.Employee = NewEmployeeStore(s.config, s.Db)

	return s
}

func (s *Store) ConnectDatabase() *sql.DB {
	connStr := fmt.Sprintf("postgres://%s:%s@%s:5432/test?sslmode=disable", s.config.DbUser, s.config.DbPass, s.config.DbHost)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Error connecting to postgres: %v", err)
	}
	return db

}
