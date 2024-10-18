package gui

import (
	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/widget"
)

type App struct {
	App    fyne.App
	Window fyne.Window
}

func NewApp() *App {
	a := app.New()
	w := a.NewWindow("Dispatch-Plus")
	w.SetFullScreen(true)
	w.SetContent(widget.NewLabel("Hello"))

	w.SetContent(widget.NewForm())

	return &App{
		App:    a,
		Window: w,
	}
}
