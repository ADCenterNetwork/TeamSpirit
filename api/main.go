package main

import (
	"net/http"

	echo "github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Root site")
	})
	e.GET("/users/:id", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users/:id")
	})

	e.GET("/users/new", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users/new")
	})

	e.GET("/users/1/files/*", func(c echo.Context) error {
		return c.String(http.StatusOK, "/users/1/files/*")
	})

	e.Logger.Fatal(e.Start(":1234"))

}
