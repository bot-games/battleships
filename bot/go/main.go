package main

import (
	"flag"
	"fmt"
	"log"
	"math/rand"
	"strings"
	"time"

	"github.com/bot-games/battleships/bot/go/api"
)

var (
	token  = flag.String("token", "", "")
	gameId = flag.String("game", "", "")
	debug  = flag.Bool("debug", false, "")
)

func main() {
	flag.Parse()
	rand.Seed(time.Now().UnixNano())

	if *token == "" {
		log.Fatalf("Empty token")
	}

	bsApi := api.New("https://bot-games.fun/battleships/api")

	if *gameId == "" {
		log.Println("Waiting opponent")
		game, err := bsApi.Join(*token, *debug)
		if err != nil {
			if apiErr, ok := err.(*api.Error); ok && apiErr.Code == "AlreadyInGame" {
				*gameId = apiErr.Data.(string)
			} else {
				log.Fatal(err)
			}
		} else {
			*gameId = game.Id
		}
	}

	for {
		log.Println("Waiting for turn")
		curTick, err := bsApi.WaitTurn(*token, *gameId)
		if err != nil {
			if apiErr, ok := err.(*api.Error); ok && apiErr.Code == "GameFinished" {
				log.Printf("The game has finished. Your result is `%s`", apiErr.Data)
				return
			}

			log.Fatal(err)
		}

		log.Printf("Tick %d", curTick.TickId)
		log.Printf("Available actions: %s", strings.Join(curTick.Actions, ", "))
		log.Println()
		for i := range curTick.YourField {
			log.Printf("\t%s┃ %s\t\t%s┃ %s", string(rune('A'+i)), formatRow(curTick.YourField[i]), string(rune('A'+i)), formatRow(curTick.OpponentField[i]))
		}
		log.Println("\t ┗━━━━━━━━━━━━━━━━━━━━\t\t ┗━━━━━━━━━━━━━━━━━━━━")
		log.Println("\t   0 1 2 3 4 5 6 7 8 9 \t\t   0 1 2 3 4 5 6 7 8 9")
		log.Println()

		/*if canAction("setup", curTick.Actions) {
			log.Printf("Do setup")
			if err := bsApi.ActionSetup(*token, *gameId, &api.Ships{
				Ship4N1: api.Ship{"A0", false},
				Ship3N1: api.Ship{"A5", false},
				Ship3N2: api.Ship{"C0", false},
				Ship2N1: api.Ship{"C4", false},
				Ship2N2: api.Ship{"C8", false},
				Ship2N3: api.Ship{"E0", false},
				Ship1N1: api.Ship{"E3", false},
				Ship1N2: api.Ship{"E5", false},
				Ship1N3: api.Ship{"E7", false},
				Ship1N4: api.Ship{"E9", false},
			}); err != nil {
				log.Fatal(err)
			}

		} else*/if canAction("fire", curTick.Actions) {
			coordinate := getFireCoordinate(curTick.OpponentField)
			log.Printf("Do fire on %s", coordinate)
			if err := bsApi.ActionFire(*token, *gameId, coordinate); err != nil {
				log.Fatal(err)
			}

		} else if canAction("skip", curTick.Actions) {
			log.Println("Do skip")
			if err := bsApi.ActionSkip(*token, *gameId); err != nil {
				log.Fatal(err)
			}

		} else {
			log.Fatal("No known actions")
		}

		log.Println("═════════════════════════════════════════════════════════")
	}
}

func formatRow(s string) string {
	s = strings.Replace(s, " ", "▢ ", -1)
	s = strings.Replace(s, "M", "⏺ ", -1)
	s = strings.Replace(s, "S", "⛵ ", -1)
	s = strings.Replace(s, "G", "❌ ", -1)

	return s
}

func canAction(action string, actions []string) bool {
	for _, a := range actions {
		if a == action {
			return true
		}
	}

	return false
}

func getFireCoordinate(field []string) string {
	var availableCoords []string
	for y, row := range field {
		for x, c := range row {
			if c == ' ' {
				availableCoords = append(availableCoords, fmt.Sprintf("%s%d", string(rune('A'+y)), x))
			}
		}
	}

	return availableCoords[rand.Intn(len(availableCoords))]
}
