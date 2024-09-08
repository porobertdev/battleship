class Gameboard {
    constructor(size) {
        this.size = size;
        this.board = this.#createBoard(10);
        this.ships = [];
        this.missed = [];
    }

    #createBoard(size) {
        // 10 rows x 10 columns;
        const arr = [];

        for (let i = 0; i < size; i++) {
            arr[i] = new Array(10).fill(0);
        }
        return arr;
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

        this.ships.push({
            length: ship.length,
            coords,
        });

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
