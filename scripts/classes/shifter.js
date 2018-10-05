import Enemy from './enemy.js';
import Missle from './missle.js';
import { game } from '../main.js';
import { laserFire, laserHit } from '../objects/sounds.js';
import { laserBallImage, shifterRed, shifterWhite } from '../objects/images.js';

class Shifter extends Enemy {
  constructor(props) {
    super(props);
    this.shifting = false;
    this.framesMoves = 0;
    this.timer = null;
    this.voulnarable = false;
  }

  shift() {
    if (!this.shifting && this.y >= 200) {
      this.vy = 0;
      this.yBounds = {min: 0, max: 550};
      this.shifting = true;
    } else if (this.shifting && !this.timer && this.vx === 0) {
      this.setImage(shifterRed);
      this.timer = setTimeout(this.shiftVelocities.bind(this), 6e2);
    }
  }

  shiftVelocities() {
    this.vx = (Math.random() * 20) * (Math.random() > 0.5 ? 1 : -1);
    while (this.x + this.vx > this.xBounds.max || this.x + this.vx < this.xBounds.min) {
      this.vx = (Math.random() * 20) * (Math.random() > 0.5 ? 1 : -1);
    }
    this.vy = (20 - this.vx) * (Math.random() > 0.5 ? 1 : -1);
    while (this.y + this.vy > this.yBounds.max || this.y + this.vy < this.yBounds.min) {
      this.vy = (20 - this.vx) * (Math.random() > 0.5 ? 1 : -1);
    }
    this.setImage(shifterWhite);
    this.voulnarable = true;
    this.timer = null;
    setTimeout(this.stop.bind(this), 5e2);
  }

  fireMissle() {
    if (!game.ship) {
      return null;
    }
    const myX = this.x + this.width / 2;
    const myY = this.y + this.height;
    const playerX = game.ship.x + game.ship.width / 2;
    const playerY = game.ship.y;
    const myVx = playerX - myX;
    const myVy = playerY - myY;

    if (this.vx === 0 && this.vy === 0 && Math.random() < 0.07) {
      const missle = new Missle({
        x: myX,
        y: myY,
        width: 14,
        height: 14,
        xBounds: null,
        yBounds: {min: -50, max: 800},
        vx: myVx * 0.12,
        vy: myVy * 0.12,
        foe: "PlayerShip",
        damage: 0.5,
        image: laserBallImage,
        fireSound: laserFire,
        impactSound: laserHit,
      });
    }
  }

  stop() {
    this.setImage(shifterRed);
    this.vx = 0;
    this.vy = 0;
  }

  translate() {
    this.shift();
    super.translate();
  }

  getHit(damage) {
    if(!this.voulnarable) {
      super.getHit(0);
    } else {
      super.getHit(damage);
    }
  }
}

export default Shifter;
