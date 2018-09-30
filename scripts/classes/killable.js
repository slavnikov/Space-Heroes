import Movable from './movable.js';

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
}

export default Killable;
