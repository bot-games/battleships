package main

import (
	"github.com/bot-games/battleships"
	"github.com/bot-games/battleships/api"
	manager "github.com/bot-games/game-manager"
	"github.com/bot-games/localrunner"
	"github.com/bot-games/localrunner/scheduler"
	"github.com/bot-games/localrunner/storage"
)

func main() {
	gameStorage := storage.New()

	localrunner.Start(
		manager.New(
			"battleships", "Battleships",
			battleships.Battleships{},
			gameStorage, scheduler.New(),
			func(m *manager.GameManager) manager.GameApi {
				return api.New(m)
			},
		),
		gameStorage,
	)
}
