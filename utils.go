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

func GetField(tickInfo *manager.TickInfo, isMy bool) []pb.Cell {
	if tickInfo.Uids[0] == tickInfo.CurUid && isMy || tickInfo.Uids[0] != tickInfo.CurUid && !isMy {
		return tickInfo.State.(*pb.State).Field1
	}

	return tickInfo.State.(*pb.State).Field2
}

func CoordinateToXY(coordinate string) (uint8, uint8, error) {
	coordinate = strings.ToUpper(coordinate)
	if !reCoordinate.MatchString(coordinate) {
		return 0, 0, ErrInvalidCoordinate
	}

	return coordinate[1] - '0', coordinate[0] - 'A', nil
}
