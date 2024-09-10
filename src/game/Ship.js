import config from './config';

class Ship {
    constructor(name) {
        this.name = name;
        this.length = config.shipTypes[name];
        this.hits = 0;
    }

    hit() {
        if (!this.isSunk()) {
            this.hits += 1;
            return 'Ship was hit';
        } else {
            return 'Ship has already sunk';
        }
    }

    isSunk() {
        return this.hits === this.length ? true : false;
    }
}

export default Ship;
