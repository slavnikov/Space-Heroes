import { game } from '../main.js';

class Level {
  constructor(enemies, message) {
    this.enemies = enemies;
    this.message = message;
  }

  setup() {
    game.messages[this.message.ref] = this.message;

    this.enemies.forEach((enemy) => {
      game.objects[enemy.ref] = enemy;
    });
  }
}

export default Level;
