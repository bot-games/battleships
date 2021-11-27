package setup

import (
	"context"

	manager "github.com/bot-games/game-manager"
)

type Method struct {
	gm *manager.GameManager
}

func New(gm *manager.GameManager) *Method {
	return &Method{
		gm: gm,
	}
}

func (m *Method) Caption(context.Context) string {
	return `Setup`
}

func (m *Method) Description(context.Context) string {
	return `Setup ships on the field. 

**There must be at least one cell between the ships.**`
}
