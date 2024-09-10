import Ship from '../game/Ship';
import { getCoordinate } from './utils';

function displayShip(player) {
    const boardSelector = player.type === 'computer' ? 'player1' : 'player2';
    const squares = document.querySelectorAll(
        `.${boardSelector} .grid div[class^="square"]`
    );

    if (boardSelector === 'player2') {
        squares.forEach((s) => s.addEventListener('click', placeShipHandler));
    }

    function placeShipHandler(event) {
        const target = event.target;
        console.log('🚀 ~ placeShipHandler ~ target:', target);

        if (
            player.gameboard.ships.length < 5 &&
            !target.classList.toString().includes('ship')
        ) {
            const row = getCoordinate(target.parentElement);
            const col = getCoordinate(target);

            player.gameboard.placeShip(new Ship(target.ship.name), [row, col]);
            target.siblings.forEach((el) =>
                el.classList.add('ship', target.ship.name)
            );

            console.log(player.gameboard.ships);
        } else {
            alert('no more ships left');
        }
    }
}

export { displayShip };
