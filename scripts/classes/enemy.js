import Killable from './killable.js';
import Missle from './missle.js';
import { game } from '../game.js';

class Enemy extends Killable {
  constructor(x, y, width, height, xBounds) {
    super(x, y, width, height, xBounds, {min: 0, max: 100}, 5, 2, 2);
    this.ref = Math.random();
  }

  getVx() {
    if (this.x + this.width >= this.xBounds.max || this.x <= this.xBounds.min) {
      if (this.yBounds.max < 680) {
        this.yBounds.max = this.yBounds.max + 50;
      } else {
        this.yBounds.max = 720;
        game.gameOver();
      }
      this.vx *= -1;
    }

    return this.vx;
  }

  fireMissle() {
    const image = new Image();
    image.src = 'assets/theme_1/ammo/grunt_missle.png';

    const missle = new Missle(this.x + this.width / 2, this.y + this.height, 7, "PlayerShip");
    missle.setImage(image);
  }

  translate() {
    if (Math.random() < 0.007) {
      this.fireMissle();
    }
    this.getVx();
    super.translate();
  }
}

export default Enemy;
