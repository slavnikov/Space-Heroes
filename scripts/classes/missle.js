import Movable from './movable.js';
import { objects } from '../game.js';

class Missle extends Movable {
  constructor(x, y, dy, foe) {
    super(x, y, 4, 20, {min: 0, max: 1250}, {min: -50, max: 750}, 0, dy);
    this.ref = Math.random();
    objects[this.ref] = this;
    this.foe = foe;
  }

  translate() {
    super.translate();
    if (this.y < 0 - this.height || this.y > 720) {
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
      if (this.vy < 0) {
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
      } else {
        if (
          this.x + this.width / 2 >= hitBox[0] &&
          this.x + this.width / 2 <= hitBox[1] &&
          this.y + this.height <= hitBox[2] &&
          this.y + this.height >= hitBox[3]
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  processTargets() {
    Object.keys(objects).forEach((key) => {
      const object = objects[key];
      if (object && object.constructor.name === this.foe && this.detectHit(object)) {
        this.hit(object);
      }
    });
  }

  hit(object) {
    object.getHit(1);
    this.delete();
  }

  kill(key) {
    delete(objects[key]);
    this.delete();
  }
}

export default Missle;
