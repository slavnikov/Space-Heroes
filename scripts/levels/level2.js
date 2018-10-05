import Level from '../classes/level.js';
import FluidGrunt from '../classes/fluid_grunt.js';
import { levelM } from '../objects/messages.js';
import { fluidGruntImage } from '../objects/images.js';

function level2() {
  const enemies = [];

  for (var j = 1; j < 5; j++) {
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
        vx: 4 * Math.pow(-1, y),
        vy: 1,
        hp: 2,
        rateOfFire: 0.01,
        image: fluidGruntImage,
      });

      enemies.push(enemy);
    }
  }

  return new Level(enemies, levelM().setDelay(3e3));
}

export default level2;
