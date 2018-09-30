import Killable from './killable.js';
import Missle from './missle.js';
import { game } from '../main.js';

class Enemy extends Killable {
  constructor(props) {
    // super(x, y, width, height, xBounds, {min: -2000, max: 100}, 3, 0.7, 1);
    super(props);
    this.ref = Math.random();
  }

  fireMissle(chance) {
    if (this.y >= 0 && Math.random() < chance) {
      const image = new Image();
      image.src = 'assets/theme_1/ammo/grunt_missle.png';

      const missle = new Missle({
        x: this.x + this.width /2,
        y: this.y + this.height,
        width: 10,
        height: 36,
        xBounds: null,
        yBounds: {min: -50, max: 800},
        vx: 0,
        vy: 15,
        foe: "PlayerShip",
        damage: 2
      });
      missle.setImage(image);
    }
  }

  translate() {
    this.fireMissle(0.007);
    super.translate();
  }
}

export default Enemy;
