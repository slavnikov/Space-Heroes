import Level from '../classes/level.js';
import ClassicGrunt from '../classes/classic_grunt.js';
import FluidGrunt from '../classes/fluid_grunt.js';
import { levelM } from '../objects/messages.js';
import { classicGruntImage, fluidGruntImage } from '../objects/images.js';

function level3() {
  const enemies = [];

  for (let j = 1; j < 4; j++) {
    for (let i = 0; i < 10; i++) {
      const x = i * 100 + 50;
      const y = j * -150;
      const yMax = 115 - (j-1) * 115;
      const xBounds = {min: x, max: x + 287};
      const enemy = new ClassicGrunt({
        x: x,
        y: y,
        width: 80,
        height: 87,
        xBounds: xBounds,
        yBounds: {min: -2000, max: yMax},
        vx: 1.5,
        vy: 0.6,
        hp: 3,
        rateOfFire: 0.007,
        image: classicGruntImage,
      });

      enemies.push(enemy);
    }
  }

  for (let j = 1; j < 4; j++) {
    for (let i = 0; i < 10; i++) {
      const x = i * 100 + 50;
      const y = j * -125 - 300;
      const yMax = 115 - (j-1) * 115 - 200;
      const enemy = new FluidGrunt({
        x: x,
        y: y,
        width: 80,
        height: 87,
        xBounds: null,
        yBounds: {min: -2000, max: yMax},
        vx: 3.5 * Math.pow(-1, y),
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


export default level3;
