import Killable from './killable.js';
import Missle from './missle.js';
import { game } from '../main.js';
import { laserFire, rocketHit } from '../objects/sounds.js';

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
  }

  // dropHealth() {
  //   if (Math.random() < 1) {
  //     // const image = new Image();
  //     // image.src = 'assets/theme_1/ammo/grunt_missle.png';
  //
  //     const missle = new Missle({
  //       x: this.x + this.width /2,
  //       y: this.y + this.height,
  //       width: 10,
  //       height: 10,
  //       xBounds: null,
  //       yBounds: {min: -50, max: 800},
  //       vx: 0,
  //       vy: 2,
  //       foe: "PlayerShip",
  //       damage: -30
  //     });
  //     // missle.setImage(image);
  //     // laserFire();
  //   }
  // }

  delete() {
    // this.dropHealth();
    super.delete();
  }
}

export default Enemy;
