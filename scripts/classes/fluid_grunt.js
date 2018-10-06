import Enemy from './enemy.js';
import { game } from '../main.js';

class FluidGrunt extends Enemy {
  constructor(props) {
    super(props);
  }

  getVx() {
    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      if (this.yBounds.max < 670) {
        this.yBounds.max = this.yBounds.max + 50;
      } else {
        this.yBounds.max = 720;
      }
      this.vx *= -1;
    }

    return this.vx;
  }

  translate() {
    if (this.y + this.height >= 719) {
      game.gameOver();
    }
    this.getVx();
    super.translate();
  }
}

export default FluidGrunt;
