import { objects } from '../game.js';

class Level {
  constructor(enemies = []) {
    this.enemies = enemies;
  }

  setup() {
    this.enemies.forEach((enemy) => {
      objects[enemy.ref] = enemy;
    });
  }
}

export default Level;
