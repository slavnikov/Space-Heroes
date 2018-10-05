import Level from '../classes/level.js';
import Bouncer from '../classes/bouncer.js';
import { levelM } from '../objects/messages.js';
import { bouncerImage } from '../objects/images.js';

function level0() {
  const enemies = [];

  enemies.push(new Bouncer({
    x: -100,
    y: -100,
    width: 50,
    height: 50,
    xBounds: {min: -100, max: 1350},
    yBounds: {min: -100, max: 700},
    vx: 3,
    vy: 3,
    hp: 25,
    rateOfFire: 0,
    image: bouncerImage,
  }));
  return new Level(enemies, levelM().setDelay(3e3));
}





export default level0;
