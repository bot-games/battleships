package wait_turn

import (
	"context"
	"errors"

	"github.com/go-qbit/rpc"

	"github.com/bot-games/battleships"
	"github.com/bot-games/battleships/pb"
	manager "github.com/bot-games/game-manager"
)

type reqV1 struct {
	Token  string `json:"token" desc:"User bot token from [profile](/profile)"`
	GameId string `json:"game_id"`
}

type stateV1 struct {
	TickId        uint16   `json:"tick_id"`
	Actions       []string `json:"actions" desc:"Available actions"`
	YourField     []string `json:"your_field"`
	OpponentField []string `json:"opponent_field"`
}

var errorsV1 struct {
	InvalidToken  rpc.ErrorFunc `desc:"Invalid token"`
	InvalidGameId rpc.ErrorFunc `desc:"Invalid game ID"`
	GameFinished  rpc.ErrorFunc `desc:"The game has finished. The result is in the data field, can be one of **Draw**, **Win**, **Defeat**"`
}

func (m *Method) ErrorsV1() interface{} {
	return &errorsV1
}

func (m *Method) V1(ctx context.Context, r *reqV1) (*stateV1, error) {
	tickInfo, err := m.gm.WaitTurn(ctx, r.Token, r.GameId)
	if err != nil {
		errGameFinished := &manager.ErrEndOfGame{}

		if errors.Is(err, manager.ErrInvalidToken) {
			return nil, errorsV1.InvalidToken("Invalid token")
		} else if errors.Is(err, manager.ErrInvalidGameId) {
			return nil, errorsV1.InvalidGameId("Invalid game ID")
		} else if errors.As(err, errGameFinished) {
			var gameResult string
			if errGameFinished.Winner == 0 {
				gameResult = "Draw"
			} else if errGameFinished.IsYou {
				gameResult = "Win"
			} else {
				gameResult = "Defeat"
			}

			return nil, errorsV1.GameFinished("The game has finished", gameResult)
		}

		return nil, err
	}

	actionsMap := battleships.GetActions(tickInfo)
	actions := make([]string, 0, len(actionsMap))
	for action := range actionsMap {
		actions = append(actions, action)
	}

	return &stateV1{
		TickId:        tickInfo.Id,
		Actions:       actions,
		YourField:     createField(tickInfo, true),
		OpponentField: createField(tickInfo, false),
	}, nil
}

func createField(tickInfo *manager.TickInfo, isMy bool) []string {
	stateField := battleships.GetField(tickInfo, isMy)

	f := make([]string, 10)

	for y := 0; y < 10; y++ {
		for x := 0; x < 10; x++ {
			switch stateField[y*10+x] {
			case pb.Cell_EMPTY:
				f[y] += " "
			case pb.Cell_SHIP:
				if isMy {
					f[y] += "S"
				} else {
					f[y] += " "
				}
			case pb.Cell_GOT:
				f[y] += "G"
			case pb.Cell_MISSED:
				f[y] += "M"
			}
		}
	}

	return f
}
