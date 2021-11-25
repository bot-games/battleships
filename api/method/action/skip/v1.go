package skip

import (
	"context"
	"errors"

	"github.com/go-qbit/rpc"

	"github.com/bot-games/battleships/pb"
	manager "github.com/bot-games/game-manager"
)

type reqV1 struct {
	Token  string `json:"token" desc:"User bot token from [profile](/profile)"`
	GameId string `json:"game_id"`
}

var errorsV1 struct {
	InvalidToken  rpc.ErrorFunc `desc:"Invalid token"`
	InvalidGameId rpc.ErrorFunc `desc:"Invalid game ID"`
	InvalidAction rpc.ErrorFunc `desc:"Invalid action"`
}

func (m *Method) ErrorsV1() interface{} {
	return &errorsV1
}

func (m *Method) V1(ctx context.Context, r *reqV1) (*struct{}, error) {
	if err := m.gm.DoAction(ctx, r.Token, r.GameId, &pb.Action{Data: &pb.Action_Skip{}}); err != nil {
		if errors.Is(err, manager.ErrInvalidToken) {
			return nil, errorsV1.InvalidToken("Invalid token")
		} else if errors.Is(err, manager.ErrInvalidGameId) {
			return nil, errorsV1.InvalidGameId("Invalid game ID")
		} else if errors.Is(err, manager.ErrInvalidAction) {
			return nil, errorsV1.InvalidAction("Invalid action")
		}

		return nil, err
	}

	return &struct{}{}, nil
}
