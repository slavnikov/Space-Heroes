import Movable from './movable.js';
import { objects } from '../game.js';

class Killable extends Movable {
  constructor(x, y, width, height, xBounds, yBounds, vx, vy, hp) {
    super(x, y, width, height, xBounds, yBounds, vx, vy);
    this.killable = true;
    this.hp = hp;
  }

  hitBox() {
    return [this.x, this.x + this.width, this.y + this.height, this.y];
  }

  getHit(damage) {

  }
}

export default Killable;
