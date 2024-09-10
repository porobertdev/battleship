import Gameboard from './Gameboard';
import Ship from './Ship';
import config from './config';

describe('Game board', () => {
    let gameboard;

    beforeEach(() => (gameboard = new Gameboard(config.boardSize)));

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

        test('ship has coordinates', () => {
            gameboard.placeShip(ship, coords);
            expect(ship).toHaveProperty('coords');
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

    test('doesnt allow invalid coords', () => {
        const coords = [3, 12];

        expect(gameboard.isCoordsInvalid(coords)).toBeTruthy();
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
