import requests as req
import json


class Game:
    def __init__(self):
        self.field = [' '*10 for _ in range(10)]
        self.opponent_field = [' '*10 for _ in range(10)]
        self.tick_id = None
        self.game_id = None

class Api:
    def __init__(self, token: str, url: str = "https://api.bot-games.fun/game/battleships"):
        self.url = url
        self.headers = {'content-type': 'application/json'}
        self.token = token
        self.actions = ['join', ]
        self.game = None

    def join(self, debug: bool = False) -> [bool, str, str]:
        if 'join' not in self.actions:
            raise ValueError(f"Possible actions are {self.actions}. Trying 'join'")
        res = req.post(self.url + '/join/v1', headers=self.headers, json={'token': self.token, 'debug': debug})
        errs = self._errors(res)
        if errs[0]:
            return False, errs[0], errs[1]

        self.game = Game()
        self.game.game_id = res.json()['id']

        return True, 'JoinedGame', self.game.game_id

    def wait_turn(self) -> [bool, str, str]:
        res = req.post(self.url + '/wait_turn/v1', headers=self.headers, json={'token': self.token,
                                                                               'game_id': self.game.game_id})
        errs = self._errors(res)
        if errs[0]:
            return False, errs[0], errs[1]
        res = res.json()
        self.game.field = res['your_field']
        self.game.opponent_field = res['opponent_field']
        self.game.tick_id = res['tick_id']
        self.actions = res['actions']
        return True, 'WaitTurn', self.game.tick_id

    def setup(self, ships: dict) -> [bool, str, str]:
        if 'setup' not in self.actions:
            raise ValueError(f"Possible actions are {self.actions}. Trying 'setup'")
        res = req.post(self.url + '/action/setup/v1', headers=self.headers, json={'token': self.token,
                                                                           'game_id': self.game.game_id,
                                                                           'ships': ships})
        errs = self._errors(res)
        if errs[0]:
            return False, errs[0], errs[1]
        return True, 'ShipsAreSetUp', None

    def skip(self) -> [bool, str, str]:
        if 'skip' not in self.actions:
            raise ValueError(f"Possible actions are {self.actions}. Trying 'skip'")
        res = req.post(self.url + '/action/skip/v1', headers=self.headers, json={'token': self.token,
                                                                          'game_id': self.game.game_id})
        errs = self._errors(res)
        if errs[0]:
            return False, errs[0], errs[1]
        return True, 'Skipped', None

    def fire(self, coord: str) -> [bool, str, str]:
        if 'fire' not in self.actions:
            raise ValueError(f"Possible actions are {self.actions}. Trying 'fire'")
        res = req.post(self.url + '/action/fire/v1', headers=self.headers, json={'token': self.token,
                                                                          'game_id': self.game.game_id,
                                                                          'coordinate': coord})
        errs = self._errors(res)
        if errs[0]:
            return False, errs[0], errs[1]
        return True, 'FiredAt', coord



    @staticmethod
    def _errors(res: req.Response) -> [str, str]:
        if res.status_code == 200:
            return None, None
        if res.status_code == 400:
            res = res.json()
            if res['code'][:8].lower() == 'invalid':
                raise ValueError(res['message'])
            if res['code'].lower() == 'alreadyingame':
                return 'AlreadyInGame', res['data']
            if res['code'].lower() == 'gamefinished':
                return 'GameFinished', res['data']
        if res.status_code == 500:
            raise Exception('Internal server error')
        raise Exception(f'Unknown code: {res.status_code}. Content: {res.content}')

