//go:generate gostatic2lib -path docs/md -package docs -out docs/game.go
//go:generate gostatic2lib -path ../player/dist -package player -out ./player/dist.go

package api

import (
	"bytes"
	"compress/gzip"
	"context"
	"io"
	"net/http"

	"github.com/go-qbit/rpc"
	"github.com/go-qbit/rpc/openapi"

	"github.com/bot-games/battleships/api/docs"
	mActionFire "github.com/bot-games/battleships/api/method/action/fire"
	mActionSetup "github.com/bot-games/battleships/api/method/action/setup"
	mActionSkip "github.com/bot-games/battleships/api/method/action/skip"
	mJoin "github.com/bot-games/battleships/api/method/join"
	mWaitTurn "github.com/bot-games/battleships/api/method/wait_turn"
	"github.com/bot-games/battleships/api/player"
	"github.com/bot-games/game-manager"
)

type BattleshipsRpc struct {
	*rpc.Rpc
}

func New(gm *manager.GameManager) *BattleshipsRpc {
	gameRpc := &BattleshipsRpc{rpc.New("github.com/bot-games/battleships/api/method", rpc.WithCors("*"))}

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

func (r *BattleshipsRpc) GetSwagger(ctx context.Context) *openapi.OpenApi {
	swagger := r.Rpc.GetSwagger(ctx)
	swagger.Info.Title = "Battleships bot API"

	gz, _ := gzip.NewReader(bytes.NewBuffer(docs.NewHTTPHandler().GetFile("/game.md").Data))
	data, _ := io.ReadAll(gz)

	swagger.Info.Description = string(data)

	return swagger
}

func (r *BattleshipsRpc) GetPlayerHandler() http.Handler {
	return player.NewHTTPHandler()
}
