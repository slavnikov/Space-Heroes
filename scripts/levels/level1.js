import Level from '../classes/level.js';
import Enemy from '../classes/enemy.js';
import { objects } from '../game.js';

const enemies = [];

for (var i = 0; i < 10; i++) {
  const x = i * 100 + 50;
  enemies.push(new Enemy(x, 0, 60, 30));
}

const level1 = new Level(enemies);

export default level1;
