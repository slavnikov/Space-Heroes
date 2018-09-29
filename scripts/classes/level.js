import { objects, messages } from '../main.js';

class Level {
  constructor(enemies, message) {
    this.enemies = enemies;
    this.message = message;
  }

  setup() {
    messages[this.message.ref] = this.message;

    this.enemies.forEach((enemy) => {
      objects[enemy.ref] = enemy;
    });
  }
}

export default Level;
