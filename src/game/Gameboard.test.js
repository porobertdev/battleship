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
        const ship = new Ship('submarine');
        const coords = [0, 5];
        const [row, col] = coords;

        gameboard.placeShip(ship, coords);
        const leftSpace = gameboard.board[row].length - col;

        expect(leftSpace >= ship.length).toBe(true);
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
        expect(string.includes(1)).toBeTruthy();
    });
});
