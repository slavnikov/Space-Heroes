import Level from '../classes/level.js';
import Shifter from '../classes/shifter.js';
import Bouncer from '../classes/bouncer.js';
import { levelM } from '../objects/messages.js';
import { shifterWhite, bouncerImage } from '../objects/images.js';

function level8() {
  const enemies = [];

  for (var k = 0; k < 6; k++) {
    enemies.push(new Shifter({
      x: (1250 / 6) * (k + 1),
      y: -100,
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
  }

  for (var i = 0; i < 6; i++) {
    enemies.push(new Bouncer({
      x: 0 + Math.random() * 1200,
      y: -100 + -20 * Math.random(),
      width: 50,
      height: 50,
      xBounds: {min: -150, max: 1350},
      yBounds: {min: -150, max: 700},
      vx: (2.75 + Math.random()) * (Math.random() > 0.5 ? 1 : -1),
      vy: 2.75 + Math.random(),
      hp: 6,
      rateOfFire: 0,
      image: bouncerImage,
    }));
  }

  return new Level(enemies, levelM().setDelay(3e3));
}


export default level8;
