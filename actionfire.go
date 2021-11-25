package battleships

import (
	"github.com/golang/protobuf/proto"

	"github.com/bot-games/battleships/pb"
	"github.com/bot-games/game-manager"
)

func (Battleships) CheckActionFire(tickInfo *manager.TickInfo, fire *pb.ActionFire) error {
	if !GetActions(tickInfo)[ActionFire] {
		return manager.ErrInvalidAction
	}

	_, _, err := CoordinateToXY(fire.Coordinate)
	return err
}

func (Battleships) DoActionFire(tickInfo *manager.TickInfo, fire *pb.ActionFire) proto.Message {
	x, y, _ := CoordinateToXY(fire.Coordinate)

	f := GetField(tickInfo, false)
	switch f[y*10+x] {
	case pb.Cell_EMPTY:
		f[y*10+x] = pb.Cell_MISSED
	case pb.Cell_SHIP:
		f[y*10+x] = pb.Cell_GOT
	}

	return tickInfo.State
}
