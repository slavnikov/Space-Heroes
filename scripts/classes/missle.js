import Movable from './movable.js';
import { game } from '../main.js';
import Explosion from './explosion.js';
import Fragment from './fragment_particle.js';

class Missle extends Movable {
  constructor(props) {
    super(props);
    this.foe = props.foe;
    this.damage = props.damage || 1;
    this.ref = Math.random();
    this.image = props.image;
    this.collideSound = props.collidesSound;
    this.impactSound = props.impactSound;

    props.fireSound();
    game.objects[this.ref] = this;
  }

  translate() {
    super.translate();
    if (this.y < 0 - this.height || this.y > 720) {
      this.delete();
    }
  }

  draw(context) {
    super.draw(context);
    this.processTargets();
  }

  detectHit(object) {
    if (object.killable) {
      const hitBox = object.hitBox();
      const yVar = this.vy < 0 ? this.y : this.y + this.height;
        if (
          this.x + this.width / 2 >= hitBox[0] &&
          this.x + this.width / 2 <= hitBox[1] &&
          yVar <= hitBox[2] &&
          yVar >= hitBox[3]
        ) {
          this.triggerEffect();
          return true;
        } else {
          return false;
        }
    }
  }

  triggerEffect() {
    if (this.damage > 0) {
      const yVar = this.vy < 0 ? this.y : this.y + this.height;
      new Explosion({x: this.x + this.width / 2, y: yVar, width: 20, height: 20});
    }
    for (var i = 0; i < (this.damage * -1); i++) {
      new Fragment(this);
    }
    this.impactSound();
  }

  processTargets() {
    Object.keys(game.objects).forEach((key) => {
      const object = game.objects[key];
      if (
        object &&
        (object.constructor.name === this.foe || object.constructor.__proto__.name === this.foe) &&
        this.detectHit(object)
      ) {
        this.hit(object);
      }
    });
  }

  hit(object) {
    object.getHit(this.damage);
    this.delete();
  }

  kill(key) {
    delete(game.objects[key]);
    this.delete();
  }
}

export default Missle;
