package battleships

import (
	"github.com/golang/protobuf/proto"

	"github.com/bot-games/battleships/pb"
	"github.com/bot-games/game-manager"
)

func (Battleships) DoActionFire(tickInfo *manager.TickInfo, pos string) (proto.Message, error) {
	x, y, err := CoordinateToXY(pos)
	if err != nil {
		return nil, err
	}

	state := &pb.State{}
	if err := proto.Unmarshal(tickInfo.Data, state); err != nil {
		return nil, err
	}

	f := GetField(state, tickInfo, false)
	switch f[y*10+x] {
	case pb.Cell_EMPTY:
		f[y*10+x] = pb.Cell_MISSED
	case pb.Cell_SHIP:
		f[y*10+x] = pb.Cell_GOT
	}

	return state, nil
}
