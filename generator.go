package battleships

import (
	"fmt"
	"math/rand"

	"github.com/bot-games/battleships/pb"
)

type genCell struct {
	x, y    uint8
	hasShip bool
	busy    bool
}

func generateRandomField() []pb.Cell {
	field := make([]genCell, 100)
	for x := uint8(0); x < 10; x++ {
		for y := uint8(0); y < 10; y++ {
			field[y*10+x] = genCell{
				x: x,
				y: y,
			}
		}
	}

	for _, shipLen := range []uint8{4, 3, 3, 2, 2, 2, 1, 1, 1, 1} {
		putShip(shipLen, field)
		//printField(field)
	}

	res := make([]pb.Cell, 100)
	for i, c := range field {
		if c.hasShip {
			res[i] = pb.Cell_SHIP
		}
	}

	return res
}

func putShip(size uint8, field []genCell) {
	freeCells := make([]genCell, 0, 100)
	for _, c := range field {
		if !c.busy {
			freeCells = append(freeCells, c)
		}
	}

	rand.Shuffle(len(freeCells), func(i, j int) {
		freeCells[i], freeCells[j] = freeCells[j], freeCells[i]
	})

	directions := []bool{true, false}
	rand.Shuffle(len(directions), func(i, j int) {
		directions[i], directions[j] = directions[j], directions[i]
	})

	for _, c := range freeCells {
		for _, up := range directions {
			if !checkShip(field, c.x, c.y, size, up) {
				continue
			}

			if up {
				for y := c.y; y < c.y+size; y++ {
					field[y*10+c.x].hasShip = true
				}

				for x := int8(c.x) - 1; x <= int8(c.x)+1; x++ {
					for y := int8(c.y) - 1; y < int8(c.y+size)+1; y++ {
						if x >= 0 && x < 10 && y >= 0 && y < 10 {
							field[y*10+x].busy = true
						}
					}
				}
			} else {
				for x := c.x; x < c.x+size; x++ {
					field[c.y*10+x].hasShip = true
				}

				for x := int8(c.x) - 1; x < int8(c.x+size)+1; x++ {
					for y := int8(c.y) - 1; y <= int8(c.y)+1; y++ {
						if x >= 0 && x < 10 && y >= 0 && y < 10 {
							field[y*10+x].busy = true
						}
					}
				}
			}

			return
		}
	}
}

func checkShip(field []genCell, posX, posY, size uint8, up bool) bool {
	if up {
		for y := posY; y < posY+size; y++ {
			if y >= 10 {
				return false
			}
			if field[y*10+posX].busy {
				return false
			}
		}
	} else {
		for x := posX; x < posX+size; x++ {
			if x >= 10 {
				return false
			}
			if field[posY*10+x].busy {
				return false
			}
		}
	}

	return true
}

func printField(field []genCell) {
	for y := 0; y < 10; y++ {
		for x := 0; x < 10; x++ {
			if field[y*10+x].hasShip {
				fmt.Print("██")
			} else if field[y*10+x].busy {
				fmt.Print("▒▒")
			} else {
				fmt.Print("░░")
			}
		}
		fmt.Println()
	}
	fmt.Println()

}
