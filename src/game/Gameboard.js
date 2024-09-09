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

    isCoordsInvalid(coords) {
        const [row, col] = coords;

        return (
            this.board[row] === undefined || this.board[row][col] === undefined
        );
    }

    placeShip(ship, coords) {
        if (!this.isCoordsInvalid(coords) && this.ships.length <= 5) {
            const [row, col] = coords;

            for (
                let i = col;
                i < col + ship.length && i < this.board[row].length;
                i++
            ) {
                this.board[row][i] = 1;
            }

            ship.coords = coords;
            this.ships.push(ship);
        }
    }

    receiveAttack(coords) {
        if (!this.isCoordsInvalid(coords)) {
            const [row, col] = coords;

            const isHit = this.board[row][col] === 1;

            if (!isHit) {
                this.missed.push(coords);
            } else {
                this.board[row][col] = -1;
            }

            return isHit;
        }
    }
}

export default Gameboard;
