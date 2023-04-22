//go:generate protoc --go_out=. pb/state.proto

package battleships

import (
	"fmt"
	"math/rand"

	"google.golang.org/protobuf/proto"

	"github.com/bot-games/battleships/pb"
	manager "github.com/bot-games/game-manager"
)

type Battleships struct{}

func (b Battleships) Init() (proto.Message, proto.Message, uint8) {
	return &pb.Options{}, &pb.State{
		Field1: generateRandomField(),
		Field2: generateRandomField(),
	}, 3
}

const (
	ActionSkip  = "skip"
	ActionSetup = "setup"
	ActionFire  = "fire"
)

func (Battleships) DecodeState(data []byte) (proto.Message, error) {
	state := &pb.State{}
	if err := proto.Unmarshal(data, state); err != nil {
		return nil, err
	}

	return state, nil
}

func (Battleships) DecodeAction(data []byte) (proto.Message, error) {
	action := &pb.Action{}
	if err := proto.Unmarshal(data, action); err != nil {
		return nil, err
	}

	return action, nil
}

func (b Battleships) CheckAction(tickInfo *manager.TickInfo, action proto.Message) error {
	switch curAction := action.(*pb.Action).Data.(type) {
	case *pb.Action_Skip:
		if !GetActions(tickInfo)[ActionSkip] {
			return manager.ErrInvalidAction
		}
		return nil

	case *pb.Action_Setup:
		return b.CheckActionSetup(tickInfo, curAction.Setup)

	case *pb.Action_Fire:
		return b.CheckActionFire(tickInfo, curAction.Fire)

	default:
		panic("invalid action")
	}
}

func (b Battleships) ApplyActions(tickInfo *manager.TickInfo, actions []manager.Action) *manager.TickResult {
	for _, action := range actions {
		tickInfo.CurUid = action.Uid

		switch curAction := action.Action.(*pb.Action).Data.(type) {
		case *pb.Action_Skip:
			// Do nothing

		case *pb.Action_Setup:
			tickInfo.State = b.DoActionSetup(tickInfo, curAction.Setup)

		case *pb.Action_Fire:
			tickInfo.State = b.DoActionFire(tickInfo, curAction.Fire)

		default:
			panic("invalid action")
		}
	}

	res := &manager.TickResult{
		NewState: tickInfo.State,
	}

	if finished, winner := isGameFinished(tickInfo); finished {
		res.GameFinished = finished
		res.Winner = winner
	} else {
		res.NextTurnPlayers = 3
	}

	return res
}

func (Battleships) SmartGuyTurn(tickInfo *manager.TickInfo) proto.Message {
	actions := GetActions(tickInfo)

	if actions[ActionFire] {
		var availableCoords []string
		for y := 0; y < 10; y++ {
			for x := 0; x < 10; x++ {
				c := tickInfo.State.(*pb.State).Field1[y*10+x]
				if c == pb.Cell_EMPTY || c == pb.Cell_SHIP {
					availableCoords = append(availableCoords, fmt.Sprintf("%s%d", string(rune('A'+y)), x))
				}
			}
		}

		return &pb.Action{Data: &pb.Action_Fire{Fire: &pb.ActionFire{Coordinate: availableCoords[rand.Intn(len(availableCoords))]}}}

	} else if actions[ActionSkip] {
		return &pb.Action{Data: &pb.Action_Skip{}}

	} else {
		panic("no known actions")
	}
}

func GetActions(tickInfo *manager.TickInfo) map[string]bool {
	if !tickInfo.Finished.IsZero() {
		return map[string]bool{}
	}

	if tickInfo.Id == 0 {
		return map[string]bool{
			ActionSkip:  true,
			ActionSetup: true,
		}
	}

	return map[string]bool{
		ActionSkip: true,
		ActionFire: true,
	}
}

func isGameFinished(tickInfo *manager.TickInfo) (bool, uint8) {
	f1HasShips := fieldHasShips(tickInfo.State.(*pb.State).Field1)
	f2HasShips := fieldHasShips(tickInfo.State.(*pb.State).Field2)
	if f1HasShips && f2HasShips && tickInfo.Id <= 100 {
		return false, 0
	}

	if f1HasShips && !f2HasShips {
		return true, 1
	}

	if !f1HasShips && f2HasShips {
		return true, 2
	}

	return true, 0 // Draw
}

func fieldHasShips(f []pb.Cell) bool {
	for _, c := range f {
		if c == pb.Cell_SHIP {
			return true
		}
	}

	return false
}
