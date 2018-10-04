import Killable from './killable.js';
import Missle from './missle.js';
import { game } from '../main.js';
import { laserFire, rocketHit } from '../objects/sounds.js';
import { healthImage } from '../objects/images.js';

class Enemy extends Killable {
  constructor(props) {
    super(props);
    this.ref = Math.random();
  }

  fireMissle(chance) {
    if (this.y + this.height >= 0 && Math.random() < chance) {
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
      laserFire();
    }
  }

  getHit(damage) {
    rocketHit();
    super.getHit(damage);
    game.changeScore(2);
  }

  translate() {
    this.fireMissle(0.007);
    super.translate();
    this.checkPlayerCollision();
  }

  checkPlayerCollision() {
    if (!game.ship) {
      return;
    }
    const hitBox = this.hitBox();
    const offset = game.ship.width * 0.3;
    const plHitBox = game.ship.hitBox();
    if (
      (
        (hitBox[0] > plHitBox[0] + offset && hitBox[0] < plHitBox[1] - offset) ||
        (hitBox[1] > plHitBox[0] + offset && hitBox[1] < plHitBox[1] - offset)
      ) &&
      hitBox[2] > plHitBox[3]
    ) {
      this.getHit(1000);
      game.ship.getHit(1000);
    }
  }

  dropHealth() {
    if (Math.random() < 0.2) {
      const missle = new Missle({
        x: this.x + this.width /2,
        y: this.y + this.height,
        width: 25,
        height: 25,
        xBounds: null,
        yBounds: {min: -50, max: 800},
        vx: 0,
        vy: 2,
        foe: "PlayerShip",
        damage: -15,
        image: healthImage,
      });
    }
  }

  delete() {
    this.dropHealth();
    super.delete();
  }

  draw(context) {
    super.draw(context);
  }
}

export default Enemy;
