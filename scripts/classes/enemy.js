import Killable from './killable.js';
import Missle from './missle.js';
import { game } from '../main.js';

class Enemy extends Killable {
  constructor(x, y, width, height, xBounds) {
    super(x, y, width, height, xBounds, {min: -2000, max: 100}, 3, 0.7, 1);
    this.ref = Math.random();
  }

  fireMissle(chance) {
    if (this.y >= 0 && Math.random() < chance) {
      const image = new Image();
      image.src = 'assets/theme_1/ammo/grunt_missle.png';

      const missle = new Missle(this.x + this.width / 2, this.y + this.height, 7, "PlayerShip");
      missle.setImage(image);
    }
  }

  translate() {
    this.fireMissle(0.007);
    super.translate();
  }
}

export default Enemy;
