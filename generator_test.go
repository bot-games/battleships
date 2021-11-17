package battleships

import (
	"fmt"
	"math/rand"
	"testing"
	"time"

	"github.com/bot-games/battleships/pb"
)

func TestGenerator(t *testing.T) {
	t.SkipNow()
	rand.Seed(time.Now().UnixNano())
	field := generateRandomField()

	for y := 0; y < 10; y++ {
		for x := 0; x < 10; x++ {
			if field[y*10+x] == pb.Cell_SHIP {
				fmt.Print("██")
			} else {
				fmt.Print("░░")
			}
		}
		fmt.Println()
	}
}
