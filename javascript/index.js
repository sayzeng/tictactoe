class TicTacToeSession {
    constructor() {
        this.currentGame = new TicTacToeGame();
        this.currentScore = new ScoreBoard();
    }

    submitMove(slug) {
        let newMove = new TicTacToeMove(slug); // this part isn't working
        newMove.getCoordinates(); // fix this, want to make part of init

        if (newMove.isValidMove(this.currentGame)) {
            this.updateButton(slug); // need to update button before switching players
            this.currentGame.makeMove(newMove);

            if (this.currentGame.isGameOver()) {
                //this.currentScore.updateScoreBoard(this.currentGame.getWinner());

                // display game over message -> modal?
                const gameOverMessage = `Game Over: ${this.currentGame.getWinner()} wins!`;
                document.getElementById('game-status').innerText = gameOverMessage;
                console.log(gameOverMessage);

                this.disableGridButtons();
            }
        }
        else {
            console.log('invalid move');
            // invalid move message -> modal?
        }
    }

    updateButton(slug) {
        const buttonElement = document.getElementById(slug);
        buttonElement.value = this.currentGame.getCurrentPlayer();
        buttonElement.disabled = true;
    }

    disableGridButtons() {
        const buttonSlugs = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

        buttonSlugs.forEach((slug) => {
            document.getElementById(slug).disabled = true;
        });
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
        this.grid = new TicTacToeGrid();
        this.currentPlayer = 'X';
        this.gameOver = false;
        this.winner = null;
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

    isGameOver() {
        this.gameOver = this.grid.isGameOverGrid();
        return this.gameOver;
    }

    makeMove(currentMove) {
        this.grid.updateGrid(currentMove, this.currentPlayer);

        if (!this.isGameOver()) {
            this.switchCurrentPlayer();
        }
        else {
            this.winner = this.currentPlayer;
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

        this.pastMoves = [];
    }

    getGrid() {
        return this.grid;
    }

    // getRemainingValidPositions() {
    //     let output = [];
    //     this.grid.forEach((row, rowIndex) => {
    //         row.forEach((col, colIndex) => {
    //             if (col === null) {
    //                 output.push(TicTacToeMove([rowIndex, colIndex])); // this will not work, must input slug
    //             }
    //         })
    //     })
    // }

    // getRandomValidPosition() {
    //     optionPool = this.getRemainingValidPositions();
    
    //     // return random position from optionPool
    // }

    updateGrid(ticTacToeMove, currentPlayer) {
        this.pastMoves.push(ticTacToeMove);
        this.grid[ticTacToeMove.coordinates[0]][ticTacToeMove.coordinates[1]] = currentPlayer;
    }

    isGameOverGrid() {
        return this.isWinGrid() || this.isDrawGrid();
    }

    isWinGrid() {
        return this.isHorizontalWinGrid() || this.isVerticalWinGrid() || this.isDiagonalWinGrid();
    }

    isDrawGrid() {
        this.pastMoves.length === 9 && !this.isWinGrid();
    }

    isHorizontalWinGrid() {
        return this.grid.some((row) => {
            return row.every((cell) => row[0] !== null && cell === row[0]);
        });
    }

    isVerticalWinGrid() {
        for (let c = 0; c < this.grid.length; c++) {
            let isSameOnVertical = this.grid.every((row) => {
                return row[c] !== null && row[c] === this.grid[0][c];
            });
            
            if (isSameOnVertical) return true;
        };

        return false;
    }

    isDiagonalWinGrid() {
        let backSlash = this.grid.every((row, index) => {
            return row[index] !== null && row[index] === this.grid[0][0];
        });

        let forwardSlash = this.grid.every((row, index) => {
            return row[this.grid.length - 1 - index] !== null && row[this.grid.length - 1 - index] === this.grid[0][this.grid.length - 1];;
        });

        return backSlash || forwardSlash;
    }
}

class TicTacToeMove {
    constructor(slug) {      // check syntax -- want to init with running getCoordinates
        this.slug = slug;
        this.coordinates = [];
    }

    getCoordinates() {
        const row_coordinates = this.slug[0] === 'a' ? 0 : this.slug[0] === 'b' ? 1 : 2;
        const col_coordinates = this.slug[1] - 1;

        this.coordinates = [row_coordinates, col_coordinates];

        return this.coordinates;
    }

    isValidMove(currentGame) {
        return currentGame.getGameBoardGrid()[this.coordinates[0]][this.coordinates[1]] === null;
    }

}


class ScoreBoard {
    constructor() {
        this.playerXWins = 0;
        this.playerOWins = 0;
        this.draws = 0;
    }

    updateScoreBoard(winner) {
        if (winner === 'X') {
            this.playerXWins++;
            document.getElementById('display-x-wins').textContent=this.playerXWins;
        }
        else if (winner === 'O') {
            this.playerOWins++;
            document.getElementById('display-o-wins').textContent=this.playerOWins;
        }
        else {
            this.draws++;
            document.getElementById('display-draws').textContent=this.draws;
        }
    }

    getScoreBoard() {
        return {
            xWins: this.playerXWins,
            oWins: this.playerOWins,
            draws: this.draws
        };
    }

}

let currentSession = new TicTacToeSession();