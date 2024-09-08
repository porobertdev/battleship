class Ship {
    constructor(name) {
        this.name = name;
        this.length = this.#type[name];
        this.hits = 0;
    }

    #type = {
        carrier: 5,
        battleship: 4,
        cruiser: 3,
        submarine: 3,
        destroyer: 2,
    };

    hit() {
        this.hits += 1;
    }

    isSunk() {
        return this.hits === this.length ? true : false;
    }
}

module.exports = Ship;
