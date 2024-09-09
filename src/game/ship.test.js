import Ship from './Ship';

describe('Ship', () => {
    const ship = new Ship('submarine');

    beforeEach(() => {
        ship.hits = 0;
    });

    test('has correct length', () => {
        expect(ship.length).toEqual(3);
    });

    test('can take hits', () => {
        expect(ship).toHaveProperty('hits');
    });

    test('takes a hit correctly', () => {
        ship.hit();
        ship.hit();
        expect(ship.hits).toEqual(2);
    });

    test('cant take more hits than its length', () => {
        let result;

        result = ship.hit();
        result = ship.hit();
        result = ship.hit();
        result = ship.hit();

        expect(result).toBe('Ship has already sunk');
    });

    test('should be sunk when health is 0', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});
