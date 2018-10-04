import PlayerShip from '../classes/player_ship.js';
import { shipImage } from './images.js';

function createPlayerShip() {

  const ship = new PlayerShip({
    x: 1250 / 2 - 50,
    y: 670,
    width: 100,
    height: 75,
    hp: 100,
    image: shipImage,
  });

  return ship;
}

export default createPlayerShip;
