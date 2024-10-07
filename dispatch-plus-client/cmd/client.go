// package main

// import (
// 	"fyne.io/fyne/v2/app"
// 	"fyne.io/fyne/v2/widget"
// )

// func main() {
// 	// Create a new grpc client
// 	// conn, err := grpc.NewClient("localhost:9001", grpc.WithTransportCredentials(insecure.NewCredentials()))
// 	// if err != nil {
// 	// 	log.Fatalf("failed to connect to gRPC server at localhost:9001: %v", err)
// 	// }
// 	// // dont forget to close it
// 	// defer conn.Close()

// 	// // create a new coffee shop client from our generated code and pass in the connection created above
// 	// c := account.NewAccountsClient(conn)

// 	// // give us a context that we can cancel, but also a timeout just to illustrate a point
// 	// ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
// 	// defer cancel()

// 	// resp, err := c.Login(ctx, &account.LoginRequest{
// 	// 	Username: "Jay",
// 	// 	Password: "Test",
// 	// })

// 	// if err != nil {
// 	// 	log.Printf("Error: %v", err)
// 	// }
// 	// log.Printf("Login: %v", resp)

// 	a := app.New()
// 	w := a.NewWindow("Hello World")

// 	w.SetContent(widget.NewLabel("Hello World!"))
// 	w.ShowAndRun()
// }

package main

import (
	"fmt"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/widget"
)

func main() {
	defer tidyUp()
	myApp := app.New()
	myWindow := myApp.NewWindow("Hello")
	myWindow.SetContent(widget.NewLabel("Hello"))

	myWindow.Show()

	w2 := myApp.NewWindow("Second")
	w2.SetContent(widget.NewLabel("Second Window Popup"))
	w2.Resize(fyne.NewSize(300, 150))
	w2.Show()
	myApp.Run()
}

func tidyUp() {
	fmt.Println("Exited")
}
