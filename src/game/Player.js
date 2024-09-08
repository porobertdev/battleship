const Gameboard = require('./Gameboard');

class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard(10);
    }
}

module.exports = Player;
