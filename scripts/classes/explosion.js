import Drawable from './drawable.js';
import { game } from '../main.js';

class Explosion extends Drawable {
  constructor(object) {
    super({
      x: object.x,
      y: object.y,
      width: object.width,
      height: object.height
    });
    this.timerID = null;
    this.frameIdx = 0;
    this.ref = Math.random();

    game.drawObject(this);
  }

  moveFrame() {
    if (this.frameIdx >= 5) {
      game.eraseObject(this);
    } else {
      const image = new Image();
      image.src = `assets/theme_1/explosion/${this.frameIdx}.png`;
      this.setImage(image);
      this.frameIdx++;
    }
  }

  draw(context) {
    if (!this.timerID) {
      this.moveFrame();
      this.timerID = setInterval(this.moveFrame.bind(this), 100);
    }
    super.draw(context);
  }
}

export default Explosion;
