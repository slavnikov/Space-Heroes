import Level from '../classes/level.js';
import ClassicGrunt from '../classes/classic_grunt.js';
import { level1M } from '../objects/messages.js';

function level1() {
  const enemies = [];
  const image = new Image();
  image.src = "assets/theme_1/enemies/grunt.png";

  for (var i = 0; i < 10; i++) {
    const x = i * 100 + 50;
    const xBounds = {min: x, max: x + 187};
    const enemy = new ClassicGrunt(x, -125, 80, 87, xBounds);
    enemy.setImage(image);

    enemies.push(enemy);
  }

  return new Level(enemies, level1M.setDelay(3e3));
}


export default level1;
