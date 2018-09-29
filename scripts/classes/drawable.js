import { game } from '../main.js';

class Drawable {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = null;
  }

  setImage(image){
    this.image = image;
  }

  draw(context) {
    if (this.image) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      context.beginPath();
      context.fillStyle="white";
      context.rect(this.x, this.y, this.width, this.height);
      context.fill();
      context.closePath();
    }
  }

  delete() {
    delete(game.objects[this.ref]);
  }
}

export default Drawable;
