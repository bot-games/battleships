package main

import (
	"github.com/bot-games/battleships"
	"github.com/bot-games/battleships/api"
	manager "github.com/bot-games/game-manager"
	"github.com/bot-games/localrunner"
)

func main() {
	localrunner.Start(
		api.New(
			manager.New(battleships.Battleships{},
				&localrunner.Storage{},
				&localrunner.Scheduler{},
			),
		),
	)
}
