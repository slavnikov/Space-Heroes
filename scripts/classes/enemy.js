import Movable from './movable.js';

class Enemy extends Movable {
  constructor() {
    super(0, 0, 30, 60, null, null, 0, 0);
    this.ref = Math.random();
    this.killable = true;
  }

  translate() {
    super.translate();

    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      this.vx *= -1;
    }
  }

  hitBox() {
    return [this.x, this.x + this.width, this.y + this.height, this.y];
  }
}

export default Enemy;
