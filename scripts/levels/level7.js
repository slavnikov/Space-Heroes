import Level from '../classes/level.js';
import FluidGrunt from '../classes/fluid_grunt.js';
import Bouncer from '../classes/bouncer.js';
import { levelM } from '../objects/messages.js';
import { fluidGruntImage } from '../objects/images.js';
import { bouncerImage } from '../objects/images.js';

function level7() {
  const enemies = [];

  for (var j = 1; j < 6; j++) {
    for (var i = 0; i < 10; i++) {
      const x = i * 100 + 50;
      const y = j * -125;
      const yMax = 115 - (j-1) * 115;
      const enemy = new FluidGrunt({
        x: x,
        y: y,
        width: 80,
        height: 87,
        xBounds: null,
        yBounds: {min: -2000, max: yMax},
        vx: 4.5 * Math.pow(-1, y),
        vy: 1,
        hp: 2,
        rateOfFire: 0.01,
        image: fluidGruntImage,
      });

      enemies.push(enemy);
    }
  }

  for (var k = 0; k < 5; k++) {
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

export default level7;
