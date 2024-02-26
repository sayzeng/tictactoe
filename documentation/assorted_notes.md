# Questions
- what does it mean when a "package is looking for funding"?
- what is a callback?
- vitest is unrecognised command in shell, npm vitest -v works, npx vitest -v, 
- ~~Writing tests for JavaScript: test frameworks~~

<br>

# To Do
- ~~install nvm (Node version manager)~~
- ~~`npm init -y` on repo~~ (required uninstalling and reinstalling nvm)
- ~~read Getting Started docs for vitest: https://vitest.dev/guide/~~
    - ~~install vitest~~
- ~~Write tests that test every part of `TicTacToeSession.submitMove`~~
    - mock `TicTacToeSession` class where `makeMove` is the only true function, others are empty functions
    - Make function that will return an example DOM


- clean up duplicate names (makeMove, getSlug)
- add game reset option
- add scoreboard reset option
- add toggle for playing against a bot
- scoreboard: updateScoreBoard()
- update game over message to account for draws

- ~~fix isVerticalWinGrid()~~
- ~~fix isDiagonalWinGrid()~~
- ~~change bot option to generate random move option~~
    - ~~make html button~~
    - ~~write code to make it work~~
        - ~~move makeBotMove into Session class~~
- ~~fix switch player: bug is that player O goes twice~~
- ~~add current player indicator~~
- ~~remove alternative move entry method (or build it)~~
- ~~think through where to put the logic of making a move~~


<br>

# Syntax notes

## JavaScript

- Javascript indexing starts at 0 (like Python)

### Testing with `vitest`
- `npm run test`

- vi.fn vs vi.spyOn
    - vi.fn: create mock function to track its execution
    - vi.spyOn: track a method on an already created object


### References
- https://javascript.info/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://vitest.dev/api/

## HTML


- input button vs button element:
    - https://stackoverflow.com/questions/469059/button-vs-input-type-button-which-to-use
    - http://web.archive.org/web/20110721191046/http://particletree.com/features/rediscovering-the-button-element/



### References
- https://developer.mozilla.org/en-US/docs/Web/HTML

- 




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
