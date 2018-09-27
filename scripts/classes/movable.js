import Drawable from './drawable.js';

class Movable extends Drawable {
  constructor(x, y, height, width, xBounds) {
    super(x, y, height, width);
    this.width = width;
    this.xBounds = xBounds;
    this.vx = 0;
  }

  translate() {

    if (
      this.x + this.vx > this.xBounds.min &&
      this.x + this.vx < this.xBounds.max
    )
      {
        this.x += this.vx;
      }
    if (this.x + this.width + this.vx >= this.xBounds.max) {
      this.x = this.xBounds.max - this.width * 0.7;
    }
    if (this.x + this.vx <= this.xBounds.min) {
      this.x = this.xBounds.min;
    }
  }

  moveHorizantally(speed) {
    this.vx = speed;
  }
}

export default Movable;
