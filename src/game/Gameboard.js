class Gameboard {
    constructor(size) {
        this.size = size;
        this.board = this.#createBoard(10);
        this.missed = [];
    }

    #createBoard(size) {
        // 10 rows x 10 columns;
        return new Array(size).fill(new Array(size).fill(0));
    }

    placeShip(ship, coords) {
        const [row, col] = coords;

        for (
            let i = col;
            i < col + ship.length && i < this.board[row].length;
            i++
        ) {
            this.board[row][i] = 1;
        }

        console.log(this.board);
    }

    receiveAttack(coords) {
        const [row, col] = coords;

        const isHit = this.board[row][col] === 1;

        if (!isHit) {
            this.missed.push(coords);
        }

        return isHit;
    }
}

module.exports = Gameboard;
