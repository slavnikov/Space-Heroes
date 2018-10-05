import Level from '../classes/level.js';
import Shifter from '../classes/shifter.js';
import { levelM } from '../objects/messages.js';
import { shifterWhite } from '../objects/images.js';

function level5() {
  const enemies = [];

  for (var k = 0; k < 5; k++) {
    enemies.push(new Shifter({
      x: (1250 / 6) * (k + 1),
      y: -100,
      width: 50,
      height: 50,
      xBounds: {min: 0, max: 1250},
      yBounds: {min: -2000, max: 600},
      vx: 0,
      vy: 1,
      hp: 2,
      rateOfFire: 0,
      image: shifterWhite,
    }));
  }

  return new Level(enemies, levelM().setDelay(3e3));
}


export default level5;
