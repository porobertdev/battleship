import { getCoordinate } from '../utils';
import Ship from '../../game/Ship';
import player2 from '../pages/index.astro';

function placeShipHandler(event) {
    const target = event.target;

    const row = getCoordinate(target.parentElement);
    const col = getCoordinate(target);

    player2.gameboard.placeShip(new Ship(target.ship.name), [row, col]);

    target.siblings.forEach((el) => el.classList.add('ship'));

    console.log(player2.gameboard.ships);
}

export default placeShipHandler;
