import Movable from '../classes/movable.js';
import Missle from '../classes/missle.js';

class PlayerShip extends Movable {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.killable = true;
  }

  hitBox() {
    return [this.x, this.x + this.width, this.y + this.height, this.y];
  }

  fireMissle() {
    new Missle(this.x + this.width / 2, this.y, -15);
  }
}

const ship = new PlayerShip(1250 / 2 - 50, 670, 100, 50);
export default ship;
