import Killable from './killable.js';
import Missle from './missle.js';
import { game } from '../game.js';

class PlayerShip extends Killable {
  constructor(x, y, width, height, hp) {
    super(x, y, width, height, null, null, null, null, hp);
    this.ref = 'player';
    this.toggleReload = this.toggleReload.bind(this);
    this.needsReload = false;
  }

  fireMissle() {
    const image = new Image();
    image.src = 'assets/theme_1/ammo/ship_missle.png';

    const missle = new Missle(this.x + this.width / 2, this.y, -15, "Enemy");
    missle.setImage(image);
  }

  toggleReload() {
    this.needsReload = !this.needsReload;
  }

  delete () {
    super.delete();
    game.gameOver();
  }
}

export default PlayerShip;
