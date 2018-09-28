import Killable from '../classes/killable.js';
import Missle from '../classes/missle.js';

class PlayerShip extends Killable {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.hitpoints = 5;
    this.ref = 'player';
  }

  fireMissle() {
    new Missle(this.x + this.width / 2, this.y, -15, "Enemy");
  }
}

const ship = new PlayerShip(1250 / 2 - 50, 670, 100, 50);
export default ship;
