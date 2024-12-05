package store

import (
	"context"
	"dispatch-plus-server/internal/config"
	"dispatch-plus-server/pkg/account"
	"errors"
	"log"
)

type LocalEmployeeStore struct {
	db     map[string]*account.User
	config *config.Config
}

func NewLocalEmployeeStore(config *config.Config, db map[string]*account.User) EmployeeStoreInterface {
	s := new(LocalEmployeeStore)
	s.db = db
	s.config = config

	return s
}

func (s *LocalEmployeeStore) GetEmployee(ctx context.Context, username string) (*account.User, error) {
	var userInfo *account.User
	for _, user := range s.db {
		if user.Username == username {
			userInfo = user
			break
		}
	}

	if userInfo == nil {
		return nil, errors.New("User Not Found")
	}
	return userInfo, nil
}

func (s *LocalEmployeeStore) GetEmployees(ctx context.Context) ([]*account.User, error) {
	log.Printf("Get Employees Local")
	users := []*account.User{}
	for _, user := range s.db {
		users = append(users, user)
	}
	return users, nil
}

func (s *LocalEmployeeStore) Create(ctx context.Context, id string, user *account.User) (*account.User, error) {
	s.db[id] = user

	user.Id = id
	return user, nil
}
