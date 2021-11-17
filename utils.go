package battleships

import (
	"errors"
	"regexp"
	"strings"

	"github.com/bot-games/battleships/pb"
	"github.com/bot-games/game-manager"
)

var (
	reCoordinate = regexp.MustCompile(`^[A-J][0-9]$`)

	ErrInvalidCoordinate = errors.New("invalid coordinate")
)

func GetField(state *pb.State, tickInfo *manager.TickInfo, isMy bool) []pb.Cell {
	if tickInfo.Uid1 == tickInfo.CurUid && isMy || tickInfo.Uid1 != tickInfo.CurUid && !isMy {
		return state.Field1
	}

	return state.Field2
}

func CoordinateToXY(coordinate string) (uint8, uint8, error) {
	coordinate = strings.ToUpper(coordinate)
	if !reCoordinate.MatchString(coordinate) {
		return 0, 0, ErrInvalidCoordinate
	}

	return coordinate[1] - '0', coordinate[0] - 'A', nil
}
