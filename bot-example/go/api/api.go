package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Api struct {
	url string
}

type Game struct {
	Id string `json:"id"`
}

type GameState struct {
	TickId        uint16   `json:"tick_id"`
	Actions       []string `json:"actions"`
	YourField     []string `json:"your_field"`
	OpponentField []string `json:"opponent_field"`
}

type Ships struct {
	Ship4N1 Ship `json:"ship_4_n1"`
	Ship3N1 Ship `json:"ship_3_n1"`
	Ship3N2 Ship `json:"ship_3_n2"`
	Ship2N1 Ship `json:"ship_2_n1"`
	Ship2N2 Ship `json:"ship_2_n2"`
	Ship2N3 Ship `json:"ship_2_n3"`
	Ship1N1 Ship `json:"ship_1_n1"`
	Ship1N2 Ship `json:"ship_1_n2"`
	Ship1N3 Ship `json:"ship_1_n3"`
	Ship1N4 Ship `json:"ship_1_n4"`
}

type Ship struct {
	Pos      string `json:"pos"`
	Vertical bool   `json:"vertical"`
}

type Error struct {
	Code    string      `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

func (e *Error) Error() string {
	return e.Message
}

func New(url string) *Api {
	return &Api{url: url}
}

func (a *Api) Join(token string, debug bool) (*Game, error) {
	game := &Game{}

	if err := a.call("/join/v1", struct {
		Token string `json:"token"`
		Debug bool   `json:"debug"`
	}{token, debug}, game); err != nil {
		return nil, err
	}

	return game, nil
}

func (a *Api) WaitTurn(token, gameId string) (*GameState, error) {
	gameState := &GameState{}

	if err := a.call("/wait_turn/v1", struct {
		Token  string `json:"token"`
		GameId string `json:"game_id"`
	}{token, gameId}, gameState); err != nil {
		return nil, err
	}

	return gameState, nil
}

func (a *Api) ActionSkip(token, gameId string) error {
	return a.call("/action/skip/v1", struct {
		Token  string `json:"token"`
		GameId string `json:"game_id"`
	}{token, gameId}, &struct{}{})
}

func (a *Api) ActionSetup(token, gameId string, ships *Ships) error {
	return a.call("/action/setup/v1", struct {
		Ships  *Ships `json:"ships"`
		Token  string `json:"token"`
		GameId string `json:"game_id"`
	}{ships, token, gameId}, &struct{}{})
}

func (a *Api) ActionFire(token, gameId, coordinate string) error {
	return a.call("/action/fire/v1", struct {
		Coordinate string `json:"coordinate"`
		Token      string `json:"token"`
		GameId     string `json:"game_id"`
	}{coordinate, token, gameId}, &struct{}{})
}

func (a *Api) call(method string, req, resp interface{}) error {
	buf := &bytes.Buffer{}
	if err := json.NewEncoder(buf).Encode(req); err != nil {
		return err
	}

	httpResp, err := http.Post(a.url+method, "application/json", buf)
	if err != nil {
		return err
	}
	defer httpResp.Body.Close()

	switch httpResp.StatusCode {
	case http.StatusOK:
		return json.NewDecoder(httpResp.Body).Decode(resp)

	case http.StatusBadRequest:
		apiErr := &Error{}
		if err := json.NewDecoder(httpResp.Body).Decode(apiErr); err != nil {
			return err
		}
		return apiErr

	default:
		return fmt.Errorf("invalid status %s", httpResp.Status)
	}
}
