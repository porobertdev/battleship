const Gameboard = require('./Gameboard');
const Ship = require('./Ship');

describe('Game board', () => {
    const gameboard = new Gameboard(10);

    test('has correct size', () => {
        expect(gameboard.size).toEqual(10);
    });

    test('board exists', () => {
        expect(gameboard.board).not.toBe(undefined);
    });

    test('there is enough space for the ship to be placed', () => {
        const ship = new Ship(3);
        const coords = [0, 5];
        const [row, col] = coords;

        gameboard.placeShip(ship, coords);
        const leftSpace = gameboard.board[row].length - col;

        expect(leftSpace >= ship.length).toBe(true);
    });

    test('can determine if a ship was hit', () => {
        const ship = new Ship(3);
        gameboard.placeShip(ship, [0, 5]);

        expect(gameboard.receiveAttack([0, 5])).toBe(true);
    });

    test('can keep track of missed attacks', () => {
        gameboard.receiveAttack([0, 3]);

        expect(gameboard).toHaveProperty('missed');
        expect(gameboard.missed.length).toBeGreaterThan(0);
    });
});
