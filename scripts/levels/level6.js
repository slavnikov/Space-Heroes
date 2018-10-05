import Level from '../classes/level.js';
import Bouncer from '../classes/bouncer.js';
import { levelM } from '../objects/messages.js';
import { bouncerImage } from '../objects/images.js';

function level6() {
  const enemies = [];

  for (var i = 0; i < 5; i++) {
    enemies.push(new Bouncer({
      x: 0 + Math.random() * 1200,
      y: -100 + -20 * Math.random(),
      width: 50,
      height: 50,
      xBounds: {min: -150, max: 1350},
      yBounds: {min: -150, max: 700},
      vx: (2.75 + Math.random()) * (Math.random() > 0.5 ? 1 : -1),
      vy: 2.75 + Math.random(),
      hp: 5,
      rateOfFire: 0,
      image: bouncerImage,
    }));
  }
  return new Level(enemies, levelM().setDelay(3e3));
}

export default level6;
