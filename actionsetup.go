package battleships

import (
	"errors"

	"google.golang.org/protobuf/proto"

	"github.com/bot-games/battleships/pb"
	"github.com/bot-games/game-manager"
)

var (
	ErrInvalidShipsPlacement = errors.New("invalid ships placement")
)

func (Battleships) CheckActionSetup(tickInfo *manager.TickInfo, setup *pb.ActionSetup) error {
	if !GetActions(tickInfo)[ActionSetup] {
		return manager.ErrInvalidAction
	}

	field := make([]genCell, 100)
	for x := uint8(0); x < 10; x++ {
		for y := uint8(0); y < 10; y++ {
			field[y*10+x] = genCell{
				x: x,
				y: y,
			}
		}
	}

	for _, ship := range pbToShips(setup) {
		shipX, shipY, err := CoordinateToXY(ship.pos)
		if err != nil {
			return err
		}
		if !checkShip(field, shipX, shipY, ship.size, ship.vertical) {
			return ErrInvalidShipsPlacement
		}

		if ship.vertical {
			for x := int8(shipX) - 1; x <= int8(shipX)+1; x++ {
				for y := int8(shipY) - 1; y < int8(shipY+ship.size)+1; y++ {
					if x >= 0 && x < 10 && y >= 0 && y < 10 {
						field[y*10+x].busy = true
					}
				}
			}
		} else {
			for x := int8(shipX) - 1; x < int8(shipX+ship.size)+1; x++ {
				for y := int8(shipY) - 1; y <= int8(shipY)+1; y++ {
					if x >= 0 && x < 10 && y >= 0 && y < 10 {
						field[y*10+x].busy = true
					}
				}
			}
		}
	}

	return nil
}

func (Battleships) DoActionSetup(tickInfo *manager.TickInfo, setup *pb.ActionSetup) proto.Message {
	field := make([]genCell, 100)
	for x := uint8(0); x < 10; x++ {
		for y := uint8(0); y < 10; y++ {
			field[y*10+x] = genCell{
				x: x,
				y: y,
			}
		}
	}

	for _, ship := range pbToShips(setup) {
		shipX, shipY, _ := CoordinateToXY(ship.pos)

		if ship.vertical {
			for y := shipY; y < shipY+ship.size; y++ {
				field[y*10+shipX].hasShip = true
			}
		} else {
			for x := shipX; x < shipX+ship.size; x++ {
				field[shipY*10+x].hasShip = true
			}
		}
	}

	f := GetField(tickInfo, true)
	for i, c := range field {
		if c.hasShip {
			f[i] = pb.Cell_SHIP
		} else {
			f[i] = pb.Cell_EMPTY
		}
	}

	return tickInfo.State
}

func pbToShips(setup *pb.ActionSetup) []struct {
	pos      string
	vertical bool
	size     uint8
} {
	return []struct {
		pos      string
		vertical bool
		size     uint8
	}{
		{setup.ShipL4N1.Coordinate, setup.ShipL4N1.Vertical, 4},

		{setup.ShipL3N1.Coordinate, setup.ShipL3N1.Vertical, 3},
		{setup.ShipL3N2.Coordinate, setup.ShipL3N2.Vertical, 3},

		{setup.ShipL2N1.Coordinate, setup.ShipL2N1.Vertical, 2},
		{setup.ShipL2N2.Coordinate, setup.ShipL2N2.Vertical, 2},
		{setup.ShipL2N3.Coordinate, setup.ShipL2N3.Vertical, 2},

		{setup.ShipL1N1.Coordinate, setup.ShipL1N1.Vertical, 1},
		{setup.ShipL1N2.Coordinate, setup.ShipL1N2.Vertical, 1},
		{setup.ShipL1N3.Coordinate, setup.ShipL1N3.Vertical, 1},
		{setup.ShipL1N4.Coordinate, setup.ShipL1N4.Vertical, 1},
	}
}
