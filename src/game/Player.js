import Gameboard from './Gameboard.js';

class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard(10);
    }
}

export default Player;
