import Movable from './movable.js';
import { objects } from '../game.js';

class Missle extends Movable {
  constructor(x, y) {
    super(x, y, 4, 20, {min: 0, max: 1250}, {min: -50, max: 720}, 0, -15);
    this.ref = Math.random();
    objects[this.ref] = this;
  }

  translate() {
    super.translate();
    if (this.y < 0 - this.height) {
      this.delete();
    }
  }

  draw(context) {
    super.draw(context);
    this.processTargets();
  }

  detectHit(object) {
    if (object.killable) {
      const hitBox = object.hitBox();
      if (
        this.x + this.width / 2 >= hitBox[0] &&
        this.x + this.width / 2 <= hitBox[1] &&
        this.y <= hitBox[2] &&
        this.y >= hitBox[3]
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  processTargets() {
    Object.keys(objects).forEach((key) => {
      const object = objects[key];
      if (object && this.detectHit(object)) {
        this.kill(key);
      }
    });
  }

  delete() {
    delete(objects[this.ref]);
  }

  kill(key) {
    delete(objects[key]);
    this.delete();
  }
}

export default Missle;
