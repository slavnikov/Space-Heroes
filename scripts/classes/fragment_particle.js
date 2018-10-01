import Movable from './movable.js';
import { game } from '../main.js';

class Fragment extends Movable {
  constructor(object) {
    super({});
    this.image = object.image;
    this.centerX = object.x + object.width / 2;
    this.centerY = object.y + object.height / 2;
    this.minX = object.x;
    this.minY = object.y;
    this.width = object.width;
    this.height = object.height;
    this.vertex1 = [
      this.minX + this.width * Math.random(),
      this.minY + this.height * Math.random()
    ];
    this.vertex2 = [
      this.minX + this.width * Math.random(),
      this.minY + this.height * Math.random()
    ];
    this.vx = (7 + Math.random() * 7) * (Math.random() < 0.5 ? -1 : 1);
    this.vy = (7 + Math.random() * 7) * (Math.random() < 0.5 ? -1 : 1);

    this.ref = Math.random();
    game.drawObject(this);
  }

  translate() {
    this.centerX += this.vx;
    this.centerY += this.vy;
    this.vertex1[0] += this.vx;
    this.vertex1[1] += this.vy;
    this.vertex2[0] += this.vx;
    this.vertex2[1] += this.vy;

    if (
      this.centerX < 0 ||
      this.centerX > 1250 ||
      this.centerY < 0 ||
      this.centerY > 720
    ) {
      game.eraseObject(this);
    }
  }

  draw(context) {
    var pattern = context.createPattern(this.image, "repeat");
    context.fillStyle = pattern;

    context.beginPath();
    context.moveTo(this.centerX, this.centerY);
    context.lineTo(this.vertex1[0], this.vertex1[1]);
    context.lineTo(this.vertex2[0], this.vertex2[1]);
    context.closePath();
    context.fill();
    this.translate();
  }
}

export default Fragment;
