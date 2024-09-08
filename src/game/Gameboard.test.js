const Gameboard = require('./Gameboard');
const Ship = require('./Ship');

describe('Game board', () => {
    let gameboard;

    beforeEach(() => (gameboard = new Gameboard(10)));

    test('has correct size', () => {
        expect(gameboard.size).toEqual(10);
    });

    test('board exists', () => {
        expect(gameboard.board).not.toBe(undefined);
    });

    describe('can be placed correctly', () => {
        const ship = new Ship('submarine');
        const coords = [0, 5];
        const [row, col] = coords;

        test('the ship can fit in the left space', () => {
            gameboard.placeShip(ship, coords);
            const leftSpace = gameboard.board[row].length - col;

            expect(leftSpace >= ship.length).toBe(true);
        });

        test('the space is empty', () => {
            const path = gameboard.board[row]
                .slice(col, col + ship.length)
                .filter((square) => square === 0);

            expect(path.length).toEqual(ship.length);
        });
    });

    test('can determine if a ship was hit', () => {
        const ship = new Ship('cruiser');
        gameboard.placeShip(ship, [0, 5]);

        expect(gameboard.receiveAttack([0, 5])).toBe(true);
    });

    test('can keep track of missed attacks', () => {
        gameboard.receiveAttack([0, 3]);

        expect(gameboard).toHaveProperty('missed');
        expect(gameboard.missed.length).toBeGreaterThan(0);
    });

    test('report whether or not all the ships have been sunk', () => {
        /*
        if board includes 1, then it means there is still
        at least a part of the ship
        */
        const string = gameboard.board.toString();
        expect(!string.includes(1)).toBeTruthy();
    });
});
