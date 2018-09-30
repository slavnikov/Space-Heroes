import Level from '../classes/level.js';
import FluidGrunt from '../classes/fluid_grunt.js';
import { level2M } from '../objects/messages.js';

function level2() {
  const enemies = [];
  const image = new Image();
  image.src = "assets/theme_1/enemies/grunt.png";

  for (var i = 0; i < 10; i++) {
    const x = i * 100 + 50;
    // const enemy = new FluidGrunt(x, -125, 80, 87);
    const enemy = new FluidGrunt({
      x: x,
      y: -125,
      width: 80,
      height: 87,
      xBounds: null,
      yBounds: {min: -2000, max: 100},
      vx: 3,
      vy: 1,
      hp: 3,
    });
    enemy.setImage(image);

    enemies.push(enemy);
  }

  return new Level(enemies, level2M.setDelay(3e3));
}

export default level2;
