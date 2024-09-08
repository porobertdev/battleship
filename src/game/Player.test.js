const Player = require('./Player');

describe('Player', () => {
    const player = new Player();

    test('has its own gameboard', () => {
        expect(player).toHaveProperty('gameboard');
    });

    test('can be computer', () => {
        expect(new Player('computer').type).toBe('computer');
    });
});
