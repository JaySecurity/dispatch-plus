package config

import (
	"log"

	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
)

type Config struct {
	Host        string `env:"HOST" default:"127.0.0.1"`
	Port        int    `env:"PORT" default:"5000"`
	DbHost      string `env:"DB_HOST" default:"localhost:5432" split_words:"true"`
	DbUser      string `env:"DB_USER" split_words:"true"`
	DbPass      string `env:"DB_PASS" split_words:"true"`
	Environment string `env:"ENV"`
}

func Init() *Config {
	// Load .env file into the environment
	err := godotenv.Load()
	if err != nil {
		log.Println(".env file not found.")
	}

	c := new(Config)
	err = envconfig.Process("", c)
	if err != nil {
		log.Fatalf("Error processing env config: %v", err)
	}

	log.Println("Configuration Loaded.")

	return c
}
