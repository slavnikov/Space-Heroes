import Movable from './movable.js';
import { objects } from '../game.js';

class Missle extends Movable {
  constructor(x, y) {
    super(x, y, 10, 2, {min: 0, max: 1250}, {min: -50, max: 720}, 0, -15);
    this.ref = Math.random();
    objects[this.ref] = this;
  }

  delete() {
    delete(objects[this.ref]);
  }

  translate() {
    super.translate();
    if (this.y < 0 - this.height) {
      this.delete();
    }
  }
}

export default Missle;
