import Killable from '../classes/killable.js';
import Missle from '../classes/missle.js';

class PlayerShip extends Killable {
  constructor(x, y, width, height, hp) {
    super(x, y, width, height, null, null, null, null, hp);
    this.ref = 'player';
  }

  fireMissle() {
    new Missle(this.x + this.width / 2, this.y, -15, "Enemy");
  }
}

const ship = new PlayerShip(1250/2-50, 670, 100, 50, 5);
export default ship;
