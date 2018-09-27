import Drawable from './drawable.js';

class Movable extends Drawable {
  constructor(x, y, height, width) {
    super(x, y, height, width);
    this.vx = 0;
  }

  translate() {
    this.x += this.vx;
  }

  moveHorizantally(speed) {
    this.vx = speed;
  }
}

export default Movable;
