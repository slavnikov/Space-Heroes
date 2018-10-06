import Level from '../classes/level.js';
import Mothership from '../classes/mothership.js';
import { levelM } from '../objects/messages.js';
import { mothershipImage } from '../objects/images.js';

function level0() {
  const enemies = [];

  enemies.push(new Mothership({
    x: 30,
    y: -200,
    width: 330,
    height: 173,
    xBounds: {min: 0, max: 1250},
    yBounds: {min: -500, max: 220},
    vx: 1,
    vy: 1,
    hp: 1000000,
    rateOfFire: 0.025,
    image: mothershipImage,
  }));
  return new Level(enemies, levelM().setDelay(3e3));
}

export default level0;
