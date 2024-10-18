package main

import (
	"context"
	"dispatch-plus-client/internal/gui"
	"dispatch-plus-client/pkg/account"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	defer tidyUp()
	conn, err := grpc.NewClient("localhost:5000", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("failed to connect to gRPC server at localhost:9001: %v", err)
	}
	// dont forget to close it
	defer conn.Close()
	// create a new coffee shop client from our generated code and pass in the connection created above
	c := account.NewAccountsClient(conn)
	// give us a context that we can cancel, but also a timeout just to illustrate a point
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	resp, err := c.Login(ctx, &account.LoginRequest{
		Username: "Jay",
		Password: "Test",
	})
	if err != nil {
		log.Printf("Error: %v", err)
	}
	log.Printf("Login: %v", resp)

	app := gui.NewApp()

	app.Window.ShowAndRun()
}

func tidyUp() {
	fmt.Println("Exited")
}
