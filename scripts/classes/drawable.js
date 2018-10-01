import { game } from '../main.js';

class Drawable {
  constructor(props) {
    this.x = props.x;
    this.y = props.y;
    this.width = props.width;
    this.height = props.height;
    this.image = props.image;
  }

  setImage(image){
    this.image = image;
  }

  draw(context) {
    if (this.image) {
      context.shadowBlur = 0;
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
    if (this.constructor.__proto__.name === "Enemy") {
      game.changeScore(25);
    }
  }
}

export default Drawable;
