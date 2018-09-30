import Enemy from './enemy.js';
import { game } from '../main.js';


class ClassicGrunt extends Enemy {
  constructor(x, y, width, height, xBounds) {
    super(x, y, width, height, xBounds);
  }

  getVx() {
    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      if (this.yBounds.max < 680 && this.y > 0) {
        this.yBounds.max = this.yBounds.max + 25;
      } else if(this.yBounds.max >= 680 && this.y >= 700 - this.height) {
        this.yBounds.max = 720;
        game.gameOver();
      }
      this.vx *= -1;
    }

    return this.vx;
  }

  translate() {
    this.getVx();
    super.translate();
  }
}

export default ClassicGrunt;
