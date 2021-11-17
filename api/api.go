package api

import (
	"github.com/go-qbit/rpc"

	mActionFire "github.com/bot-games/battleships/api/method/action/fire"
	mActionSetup "github.com/bot-games/battleships/api/method/action/setup"
	mActionSkip "github.com/bot-games/battleships/api/method/action/skip"
	mJoin "github.com/bot-games/battleships/api/method/join"
	mWaitTurn "github.com/bot-games/battleships/api/method/wait_turn"

	"github.com/bot-games/game-manager"
)

func New(gm manager.GameManager) *rpc.Rpc {
	gameRpc := rpc.New("github.com/bot-games/battleships/api/method")

	if err := gameRpc.RegisterMethods(
		mJoin.New(gm),
		mWaitTurn.New(gm),
		mActionSkip.New(gm),
		mActionSetup.New(gm),
		mActionFire.New(gm),
	); err != nil {
		panic(err)
	}

	return gameRpc
}
