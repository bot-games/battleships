//go:generate protoc --go_out=. pb/state.proto

package battleships

import (
	"errors"
	"fmt"
	"math/rand"

	"github.com/golang/protobuf/proto"

	"github.com/bot-games/battleships/pb"
	manager "github.com/bot-games/game-manager"
)

type Battleships struct {
}

const (
	ActionSkip  = "skip"
	ActionSetup = "setup"
	ActionFire  = "fire"
)

func (Battleships) InitState() proto.Message {
	return &pb.State{
		Field1: generateRandomField(),
		Field2: generateRandomField(),
	}
}

func (Battleships) GetActions(tickInfo *manager.TickInfo) []string {
	if !tickInfo.Finished.IsZero() {
		return []string{}
	}

	if tickInfo.Id == 0 {
		return []string{ActionSkip, ActionSetup}
	}

	return []string{ActionSkip, ActionFire}
}

func (b Battleships) DoAction(tickInfo *manager.TickInfo, action string, data interface{}) (proto.Message, error) {
	switch action {
	case ActionSkip:
		state := &pb.State{}
		if err := proto.Unmarshal(tickInfo.Data, state); err != nil {
			return nil, err
		}

		return state, nil

	case ActionSetup:
		return b.DoActionSetup(tickInfo, data.(*ActionSetupData))

	case ActionFire:
		return b.DoActionFire(tickInfo, data.(string))
	}

	return nil, errors.New("invalid action")
}

func (Battleships) IsGameFinished(tickInfo *manager.TickInfo) (bool, uint8, error) {
	state := &pb.State{}
	if err := proto.Unmarshal(tickInfo.Data, state); err != nil {
		return false, 0, err
	}

	f1HasShips := fieldHasShips(state.Field1)
	f2HasShips := fieldHasShips(state.Field2)
	if f1HasShips && f2HasShips && tickInfo.Id <= 100 {
		return false, 0, nil
	}

	if f1HasShips && !f2HasShips {
		return true, 1, nil
	}

	if !f1HasShips && f2HasShips {
		return true, 2, nil
	}

	return true, 0, nil // Draw
}

func (b Battleships) SmartGuyTurn(tickInfo *manager.TickInfo) (string, interface{}) {
	actions := map[string]bool{}
	for _, action := range b.GetActions(tickInfo) {
		actions[action] = true
	}

	if actions[ActionFire] {
		state := &pb.State{}
		if err := proto.Unmarshal(tickInfo.Data, state); err != nil {
			panic(err)
		}

		var availableCoords []string
		for y := 0; y < 10; y++ {
			for x := 0; x < 10; x++ {
				c := state.Field1[y*10+x]
				if c == pb.Cell_EMPTY || c == pb.Cell_SHIP {
					availableCoords = append(availableCoords, fmt.Sprintf("%s%d", string(rune('A'+y)), x))
				}
			}
		}

		return ActionFire, availableCoords[rand.Intn(len(availableCoords))]

	} else if actions[ActionSkip] {
		return ActionSkip, nil

	} else {
		panic("no known actions")
	}
}

func fieldHasShips(f []pb.Cell) bool {
	for _, c := range f {
		if c == pb.Cell_SHIP {
			return true
		}
	}

	return false
}
