import Level from '../classes/level.js';
import Shifter from '../classes/shifter.js';
import { level1M } from '../objects/messages.js';
import { shifterWhite } from '../objects/images.js';

function level0() {
  const enemies = [];

  enemies.push(new Shifter({
    x: 1250 / 2,
    y: -10,
    width: 50,
    height: 50,
    xBounds: {min: 0, max: 1250},
    yBounds: {min: -2000, max: 600},
    vx: 0,
    vy: 1,
    hp: 3,
    rateOfFire: 0,
    image: shifterWhite,
  }));
  return new Level(enemies, level1M.setDelay(3e3));
}





export default level0;
