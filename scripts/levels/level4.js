import Level from '../classes/level.js';
import ClassicGrunt from '../classes/classic_grunt.js';
import Shifter from '../classes/shifter.js';
import { levelM } from '../objects/messages.js';
import { classicGruntImage, shifterWhite } from '../objects/images.js';

function level4() {
  const enemies = [];

  for (var j = 1; j < 4; j++) {
    for (var i = 0; i < 10; i++) {
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
        hp: 4,
        rateOfFire: 0.007,
        image: classicGruntImage,
      });

      enemies.push(enemy);
    }
  }

  for (var k = 0; k < 3; k++) {
    enemies.push(new Shifter({
      x: 1250 / 2,
      y: -650,
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


export default level4;
