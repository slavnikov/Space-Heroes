import Movable from './movable.js';
import Missle from './missle.js';
// import { objects } from '../game.js';

class Enemy extends Movable {
  constructor(x, y, width, height, xBounds) {
    super(x, y, width, height, xBounds, {min: 0, max: 100}, 5, 2);
    this.ref = Math.random();
    this.killable = true;
  }

  // flankingEnemy() {
  //   return Object.values(objects).find((object) => {
  //     if (object.constructor.name !== "Enemy") {
  //       return false;
  //     }
  //     if (this.vx > 0) {
  //       return object.x > this.x;
  //     } else {
  //       return object.x < this.x;
  //     }
  //   });
  // }

  getVx() {
    // const flanker = this.flankingEnemy();
    //
    // if (this.vx < 0 && flanker && flanker.vx !== this.vx) {
    //   if (flanker.yBounds.max !== this.yBounds.max) {
    //     this.yBounds.max = flanker.yBounds.max;
    //   }
    //   this.vx = flanker.vx;
    //   return this.vx;
    // }

    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      this.yBounds.max = this.yBounds.max + 50;
      this.vx *= -1;
    }

    // if (flanker) {
    //   this.vx = flanker.getVx();
    //   this.yBounds.max = flanker.yBounds.max;
    // }

    return this.vx;
  }

  fireMissle() {
    new Missle(this.x + this.width / 2, this.y + this.height, 7);
  }

  translate() {
    if (Math.random() < 0.007) {
      this.fireMissle();
    }
    this.getVx();
    super.translate();
  }

  hitBox() {
    return [this.x, this.x + this.width, this.y + this.height, this.y];
  }
}

export default Enemy;
