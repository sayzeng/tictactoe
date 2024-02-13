# Questions
- Writing tests for JavaScript: test frameworks
- 

<br>

# To Do
- ~~fix isVerticalWinGrid()~~
- ~~fix isDiagonalWinGrid()~~
- add bot option
- ~~fix switch player: bug is that player O goes twice~~
- add current player indicator

- ~~remove alternative move entry method (or build it)~~
- JS: fix init of TicTacToeMove class to get coordinates
- ~~think through where to put the logic of making a move~~
- add game reset option
- add scoreboard reset option
- add toggle for playing against a bot
- scoreboard: updateScoreBoard()



<br>

# Syntax notes

## JavaScript

- Javascript indexing starts at 0 (like Python)

### References
- https://javascript.info/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript


## HTML

### References
- https://developer.mozilla.org/en-US/docs/Web/HTML






<br>

# Thinking notes

## Game flow
Actions
- Create blank/reset game board:
    - 3x3 grid
    - keep track of current turn (x or o)
    - keep track of past moves
- Make a move
    - check if move is valid
    - update game board
    - check for game end:
        - check for win
        - check for draw

- Objects:
    - game: game board grid, current turn, past moves
    - move: coordinates, player
    - scoreboard: wins, losses, draws

function makeMove(moveCoordinates) {
    // check if move is valid
    // if valid, update game board, update turn
        // check if game is over
            // if over, return game over message
            // if not over, ask for next move
    // if not valid, return error message
}

### Making a move:
- submit slug
- get grid coordinates from slug
- submit move
    - if move is valid
        - update button
        - game.makeMove
            - update game grid
            - if game is over -> check at game level, action at session level
                - update scoreboard
                - display game over message
                - lock all buttons
            - if game is not over
                - switch players -> at game level
    - if move is not valid

submitMove -> Session level action, not Game level?
