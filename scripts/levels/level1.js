import Enemy from '../classes/enemy.js';
import { objects } from '../game.js';

const enemy = new Enemy();

function setupLevel() {
  objects[enemy.ref] = enemy;
}

export default setupLevel;
