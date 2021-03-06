package setup

import (
	"context"
	"errors"

	"github.com/go-qbit/rpc"

	"github.com/bot-games/battleships"
	"github.com/bot-games/battleships/pb"
	manager "github.com/bot-games/game-manager"
)

type reqV1 struct {
	Token  string  `json:"token" desc:"User bot token from [profile](/profile)"`
	GameId string  `json:"game_id"`
	Ships  ShipsV1 `json:"ships"`
}

type ShipsV1 struct {
	Ship4N1 ShipV1 `json:"ship_4_n1"`
	Ship3N1 ShipV1 `json:"ship_3_n1"`
	Ship3N2 ShipV1 `json:"ship_3_n2"`
	Ship2N1 ShipV1 `json:"ship_2_n1"`
	Ship2N2 ShipV1 `json:"ship_2_n2"`
	Ship2N3 ShipV1 `json:"ship_2_n3"`
	Ship1N1 ShipV1 `json:"ship_1_n1"`
	Ship1N2 ShipV1 `json:"ship_1_n2"`
	Ship1N3 ShipV1 `json:"ship_1_n3"`
	Ship1N4 ShipV1 `json:"ship_1_n4"`
}

type ShipV1 struct {
	Pos      string `json:"pos" desc:"coordinate in format [A-J][0-9]"`
	Vertical bool   `json:"vertical"`
}

var errorsV1 struct {
	InvalidToken      rpc.ErrorFunc `desc:"Invalid token"`
	InvalidGameId     rpc.ErrorFunc `desc:"Invalid game ID"`
	InvalidAction     rpc.ErrorFunc `desc:"Invalid action"`
	InvalidCoordinate rpc.ErrorFunc `desc:"Invalid coordinate"`
	InvalidPlacement  rpc.ErrorFunc `desc:"Invalid placement"`
}

func (m *Method) ErrorsV1() interface{} {
	return &errorsV1
}

func (m *Method) V1(ctx context.Context, r *reqV1) (*struct{}, error) {
	if err := m.gm.DoAction(ctx, r.Token, r.GameId, &pb.Action{Data: &pb.Action_Setup{Setup: &pb.ActionSetup{
		ShipL4N1: shipV1ToPb(r.Ships.Ship4N1),

		ShipL3N1: shipV1ToPb(r.Ships.Ship3N1),
		ShipL3N2: shipV1ToPb(r.Ships.Ship3N2),

		ShipL2N1: shipV1ToPb(r.Ships.Ship2N1),
		ShipL2N2: shipV1ToPb(r.Ships.Ship2N2),
		ShipL2N3: shipV1ToPb(r.Ships.Ship2N3),

		ShipL1N1: shipV1ToPb(r.Ships.Ship1N1),
		ShipL1N2: shipV1ToPb(r.Ships.Ship1N2),
		ShipL1N3: shipV1ToPb(r.Ships.Ship1N3),
		ShipL1N4: shipV1ToPb(r.Ships.Ship1N4),
	}}}); err != nil {
		if errors.Is(err, manager.ErrInvalidToken) {
			return nil, errorsV1.InvalidToken("Invalid token")
		} else if errors.Is(err, manager.ErrInvalidGameId) {
			return nil, errorsV1.InvalidGameId("Invalid game ID")
		} else if errors.Is(err, manager.ErrInvalidAction) {
			return nil, errorsV1.InvalidAction("Invalid action")
		} else if errors.Is(err, battleships.ErrInvalidCoordinate) {
			return nil, errorsV1.InvalidCoordinate("Invalid coordinate")
		} else if errors.Is(err, battleships.ErrInvalidShipsPlacement) {
			return nil, errorsV1.InvalidPlacement("Invalid ships placement")
		}

		return nil, err
	}

	return &struct{}{}, nil
}

func shipV1ToPb(s ShipV1) *pb.ActionSetup_Ship {
	return &pb.ActionSetup_Ship{
		Coordinate: s.Pos,
		Vertical:   s.Vertical,
	}
}
