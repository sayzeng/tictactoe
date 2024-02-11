
/*

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

*/

function changeValue(slug) {
    const elem = document.getElementById(slug);
    elem.value = 'X';
}

currentSession = new TicTacToeSession();



class TicTacToeSession {
    constructor() {
        this.currentGame = new TicTacToeGame();
        this.currentScore = new ScoreBoard();
    }

    clickButton(slug) {
        const elem = document.getElementById(slug)

        if (elem.value === ' ') {
            this.currentGame.makeMove(TicTacToeMove(slug));
            elem.value = this.currentGame.getCurrentPlayer();
            elem.disabled = true;

            if (this.currentGame.gameOver) {
                // game over message

                this.currentScore.updateScoreBoard(this.currentGame.getWinner());
            }
        }
        else {
            // invalid move message
        }
    }

    resetGame() {
        this.currentGame = new TicTacToeGame();
    }

    resetScoreBoard() {
        this.currentScore = new ScoreBoard();
    }
}

class TicTacToeGame {
    constructor() {
        this.grid = TicTacToeGrid();
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.winner = null;
        this.pastMoves = [];
    }

    getCurrentPlayer() {
        return this.currentPlayer;
    }

    getGameBoardGrid() {
        return this.grid.getGrid();
    }

    getWinner() {
        return this.winner;
    }

    makeMove(currentMove) {
        // come back to this
        // if (!currentMove.isValidMove(this.grid)) {
            // return 'Invalid move';
        // }

        this.grid.updateGrid(currentMove, this.currentPlayer);
        this.pastMoves.push(currentMove);
        this.gameOver = this.grid.isGameOverGrid();
        if (!this.gameOver) {
            this.switchCurrentPlayer();
        }
    }

    switchCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

}

class TicTacToeGrid {
    constructor() {
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

    }

    getGrid() {
        return this.grid;
    }

    getRemainingValidPositions() {
        let output = [];
        this.grid.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (col === null) {
                    output.push(TicTacToeMove([rowIndex, colIndex]));
                }
            })
        })
    }

    getRandomValidPosition() {
        optionPool = getRemainingValidPositions();
    
        // return random position from optionPool
    }

    updateGrid(ticTacToeMove, currentPlayer) {
        this.grid[ticTacToeMove.coordinates[0]][ticTacToeMove.coordinates[1]] = currentPlayer;
    }

    isGameOverGrid() {
        return this.isWinGrid() || this.isDrawGrid();
    }

    isWinGrid() {
        return isHorizontalWinGrid() || isVerticalWinGrid() || isDiagonalWinGrid();
    }

    isDrawGrid() {
        this.pastMoves.length === 9 && !this.isWinGrid();
    }

    isHorizontalWinGrid() {
        this.grid.forEach((row) => {
            if (row[0] === row[1] === row[2]) {
                return true;
            }
        })
    }

    isVerticalWinGrid() {
        for (let i = 0; i < 3; i++) {
            if (this.grid[0][i] === this.grid[1][i] === this.grid[2][i]) {
                return true;
            }
        }
    }

    isDiagonalWinGrid() {
        return this.grid[0][0] === this.grid[1][1] === this.grid[2][2] || this.grid[0][2] === this.grid[1][1] === this.grid[2][0];
    }
}

class TicTacToeMove {
    constructor(slug) {      // check syntax
        this.slug = slug;
    }

    getCoordinates() {
        row_coordinates = this.slug[0] === 'a' ? 0 : this.slug[0] === 'b' ? 1 : 2;
        col_coordinates = this.slug[1] - 1;

        this.coordinates = [row_coordinates, col_coordinates];
    }

    isValidMove(currentGrid) {
        currentGrid.getGrid()[this.coordinates[0]][this.coordinates[1]] === null;
    }

}


class ScoreBoard {
    constructor() {
        this.playerXWins = 0;
        this.playerOWins = 0;
        this.draws = 0;
    }

    updateScoreBoard(winner) {
        winner === 'X' ? this.playerXWins++ : winner === 'O' ? this.playerOWins++ : this.draws++;
    }

    getScoreBoard() {
        return {
            wins: this.wins,
            losses: this.losses,
            draws: this.draws
        };
    }

}
