import Enemy from '../classes/enemy.js';
import { objects } from '../game.js';

const enemy1 = new Enemy(50, 0, 60, 30);
const enemy2 = new Enemy(150, 0, 60, 30);
const enemy3 = new Enemy(250, 0, 60, 30);
const enemy4 = new Enemy(350, 0, 60, 30);
const enemy5 = new Enemy(450, 0, 60, 30);
const enemy6 = new Enemy(550, 0, 60, 30);
const enemy7 = new Enemy(650, 0, 60, 30);
const enemy8 = new Enemy(750, 0, 60, 30);
const enemy9 = new Enemy(850, 0, 60, 30);
const enemy10 = new Enemy(950, 0, 60, 30);

function setupLevel() {
  objects[enemy1.ref] = enemy1;
  objects[enemy2.ref] = enemy2;
  objects[enemy3.ref] = enemy3;
  objects[enemy4.ref] = enemy4;
  objects[enemy5.ref] = enemy5;
  objects[enemy6.ref] = enemy6;
  objects[enemy7.ref] = enemy7;
  objects[enemy8.ref] = enemy8;
  objects[enemy9.ref] = enemy9;
  objects[enemy10.ref] = enemy10;
}

export default setupLevel;
