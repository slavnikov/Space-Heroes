import PlayerShip from '../classes/player_ship.js';

function createPlayerShip() {
  const image = new Image();
  image.src = 'assets/theme_1/player/ship.png';

  const ship = new PlayerShip({
    x: 1250 / 2 - 50,
    y: 670,
    width: 100,
    height: 75,
    hp: 100,
  });
  ship.setImage(image);

  return ship;
}

export default createPlayerShip;
