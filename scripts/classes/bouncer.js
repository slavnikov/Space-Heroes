import Enemy from './enemy.js';
import Missle from './missle.js';
import { laserFire, laserHit } from '../objects/sounds.js';
import { laserBallImage, shifterRed, shifterWhite } from '../objects/images.js';
import { game } from '../main.js';

class Bouncer extends Enemy {
  constructor(props) {
    super(props);
  }

  translateH() {
    super.translateH();
    if (
      this.x === this.xBounds.max - this.width ||
      this.x === this.xBounds.min
    ) {
      this.vx = this.vx * -1;
    }
  }

  translateV() {
    super.translateV();
    if (
      this.y === this.yBounds.max - this.height ||
      this.y === this.yBounds.min
    ) {
      this.vy = this.vy * -1;
    }
  }

  fireMissle() {
    if (!game.ship) {
      return;
    }
    const myX = this.x + this.width / 2;
    const myY = this.y + this.height;
    const playerX = game.ship.x + game.ship.width / 2;
    const playerY = game.ship.y;
    const myVx = playerX - myX;
    const myVy = playerY - myY;

    if (this.x > 0 && this.y > 0 && Math.random() < 0.02) {
      const missle = new Missle({
        x: myX,
        y: myY,
        width: 14,
        height: 14,
        xBounds: null,
        yBounds: {min: -50, max: 800},
        vx: myVx * 0.1,
        vy: myVy * 0.1,
        foe: "PlayerShip",
        damage: 1,
        image: laserBallImage,
        fireSound: laserFire,
        impactSound: laserHit,
      });
    }
  }


}

export default Bouncer;
