import Movable from './movable.js';
import Explosion from './explosion.js';
import Fragment from './fragment_particle.js';
import { explosion } from '../objects/sounds.js';

class Killable extends Movable {
  constructor(props) {
    super(props);
    this.hp = props.hp;
    this.killable = true;
  }

  hitBox() {
    return [this.x, this.x + this.width, this.y + this.height, this.y];
  }

  getHit(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.delete();
    }
  }

  delete() {
    new Explosion(this);
    for (var i = 0; i < 10; i++) {
      new Fragment(this);
    }
    explosion();

    super.delete();
  }
}

export default Killable;
