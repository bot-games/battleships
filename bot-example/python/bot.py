from api import Api
from random import choice


#  Creates api object
api = Api(token='2ccd6cf878ad5e11c6909c104fe7bc4d')

# Join game
a = api.join(debug=True)
if a[0] == False:
    raise Exception(f'{a[1]}: {a[2]}')
print(f"{a[1]}: {a[2]}")

# Main loop
a = api.wait_turn()
while a[0]:
    if 'fire' in api.actions:  # If can fire (may be setup)
        # Get all possible coordinates to fire except already fired
        possibles = []
        for i, row in enumerate(api.game.opponent_field):
            for j, col in enumerate(row):
                if col == ' ':
                    possibles.append((i, j))
        # Choice random of them
        c, n = choice(possibles)
        # Fire
        api.fire(f"{'ABCDEFGHIJ'[c]}{n}")
    else:
        api.skip()
    a = api.wait_turn()
print(f"{a[1]}: {a[2]}")
