import Level from '../classes/level.js';
import Enemy from '../classes/enemy.js';
import { level1M } from '../objects/messages.js';

const enemies = [];
const image = new Image();
image.src = "assets/theme_1/enemies/grunt.png";

for (var i = 0; i < 10; i++) {
  const x = i * 100 + 50;
  const enemy = new Enemy(x, 0, 80, 87);
  enemy.setImage(image);

  enemies.push(enemy);
}

const level1 = new Level(enemies, level1M);

export default level1;
