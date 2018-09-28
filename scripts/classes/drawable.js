import {objects} from '../game.js';

class Drawable {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle="green";
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
    context.closePath();
  }

  delete() {
    delete(objects[this.ref]);
  }
}

export default Drawable;
