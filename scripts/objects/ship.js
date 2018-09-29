import PlayerShip from '../classes/player_ship.js';

function createPlayerShip() {
  const image = new Image();
  image.src = 'assets/theme_1/player/ship.png';

  const ship = new PlayerShip(1250/2-50, 670, 100, 75, 2);
  ship.setImage(image);

  return ship;
}

export default createPlayerShip;

// const image = new Image();
// image.src = 'assets/theme_1/player/ship.png';
//
// const ship = new PlayerShip(1250/2-50, 670, 100, 75, 25);
// ship.setImage(image);

// export default ship;
