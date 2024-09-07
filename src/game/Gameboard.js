class Gameboard {
    constructor(size) {
        this.size = size;
        this.board = this.#createBoard(10);
    }

    #createBoard(size) {
        // 10 rows x 10 columns;
        return new Array(size).fill(new Array(size).fill(0));
    }

    placeShip(ship, coords) {
        const [row, col] = coords;

        /* this.board[row]
            .slice(col, col + ship.length)
            .forEach((square) => (square = 1)); */

        for (
            let i = col;
            i < col + ship.length && i < this.board[row].length;
            i++
        ) {
            this.board[row][i] = 1;
            // console.log(this.board[row][i]);
        }

        console.log(this.board[row]);
    }
}

module.exports = Gameboard;
