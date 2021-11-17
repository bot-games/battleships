package battleships

import (
	"errors"

	"github.com/golang/protobuf/proto"

	"github.com/bot-games/battleships/pb"
	"github.com/bot-games/game-manager"
)

type ActionSetupData struct {
	Ship4N1 Ship
	Ship3N1 Ship
	Ship3N2 Ship
	Ship2N1 Ship
	Ship2N2 Ship
	Ship2N3 Ship
	Ship1N1 Ship
	Ship1N2 Ship
	Ship1N3 Ship
	Ship1N4 Ship
}

type Ship struct {
	Pos      string
	Vertical bool
}

var (
	ErrInvalidShipsPlacement = errors.New("invalid ships placement")
)

func (Battleships) DoActionSetup(tickInfo *manager.TickInfo, data *ActionSetupData) (proto.Message, error) {
	field := make([]genCell, 100)
	for x := uint8(0); x < 10; x++ {
		for y := uint8(0); y < 10; y++ {
			field[y*10+x] = genCell{
				x: x,
				y: y,
			}
		}
	}

	for _, ship := range []struct {
		pos      string
		vertical bool
		size     uint8
	}{
		{data.Ship4N1.Pos, data.Ship4N1.Vertical, 4},

		{data.Ship3N1.Pos, data.Ship3N1.Vertical, 3},
		{data.Ship3N2.Pos, data.Ship3N2.Vertical, 3},

		{data.Ship2N1.Pos, data.Ship2N1.Vertical, 2},
		{data.Ship2N2.Pos, data.Ship2N2.Vertical, 2},
		{data.Ship2N3.Pos, data.Ship2N3.Vertical, 2},

		{data.Ship1N1.Pos, data.Ship1N1.Vertical, 1},
		{data.Ship1N2.Pos, data.Ship1N2.Vertical, 1},
		{data.Ship1N3.Pos, data.Ship1N3.Vertical, 1},
		{data.Ship1N4.Pos, data.Ship1N4.Vertical, 1},
	} {
		shipX, shipY, err := CoordinateToXY(ship.pos)
		if err != nil {
			return nil, err
		}
		if !checkShip(field, shipX, shipY, ship.size, ship.vertical) {
			return nil, ErrInvalidShipsPlacement
		}

		if ship.vertical {
			for y := shipY; y < shipY+ship.size; y++ {
				field[y*10+shipX].hasShip = true
			}

			for x := int8(shipX) - 1; x <= int8(shipX)+1; x++ {
				for y := int8(shipY) - 1; y < int8(shipY+ship.size)+1; y++ {
					if x >= 0 && x < 10 && y >= 0 && y < 10 {
						field[y*10+x].busy = true
					}
				}
			}
		} else {
			for x := shipX; x < shipX+ship.size; x++ {
				field[shipY*10+x].hasShip = true
			}

			for x := int8(shipX) - 1; x < int8(shipX+ship.size)+1; x++ {
				for y := int8(shipY) - 1; y <= int8(shipY)+1; y++ {
					if x >= 0 && x < 10 && y >= 0 && y < 10 {
						field[y*10+x].busy = true
					}
				}
			}
		}

		printField(field)
	}

	state := &pb.State{}
	if err := proto.Unmarshal(tickInfo.Data, state); err != nil {
		return nil, err
	}

	f := GetField(state, tickInfo, true)
	for i, c := range field {
		if c.hasShip {
			f[i] = pb.Cell_SHIP
		} else {
			f[i] = pb.Cell_EMPTY
		}
	}

	return state, nil
}
