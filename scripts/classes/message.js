import {game} from '../main.js';

class Message {
  constructor(font, color, alignment, text, x, y) {
    this.font = font;
    this.color = color;
    this.alignment = alignment;
    this.text = text;
    this.x = x;
    this.y = y;
    this.ref = Math.random();
    this.delay = null;
  }

  draw(context) {
    context.font = this.font;
    context.fillStyle = this.color;
    context.textAlign = this.alignment;
    context.fillText(this.text, this.x, this.y);
    if (this.delay) {
      setTimeout(this.erase.bind(this), this.delay);
      this.delay = null;
    }
  }

  setDelay(delay) {
    this.delay = delay;
    return this;
  }

  erase() {
    delete(game.messages[this.ref]);
  }
}

export default Message;
