import Drawable from './drawable.js';

class Movable extends Drawable {
  constructor(x, y, height, width, xBounds, yBounds, vx, vy) {
    super(x, y, height, width);
    this.width = width;
    this.xBounds = xBounds || {min: 0, max: 1250};
    this.yBounds = yBounds || {min: 0, max: 720};
    this.vx = vx || 0;
    this.vy = vy || 0;
  }

  translateH() {
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

  translateV() {
    if (
      this.y + this.vy > this.yBounds.min &&
      this.y + this.vy < this.yBounds.max
    )
      {
        this.y += this.vy;
      }
  }

  translate() {
    this.translateH();
    this.translateV();
  }

  moveHorizantally(speed) {
    this.vx = speed;
  }

  draw(context) {
    super.draw(context);
    this.translate();
  }
}

export default Movable;
