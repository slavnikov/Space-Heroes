import {messages} from '../main.js';

class Message {
  constructor(font, color, alignment, text, x, y, delay) {
    this.font = font;
    this.color = color;
    this.alignment = alignment;
    this.text = text;
    this.x = x;
    this.y = y;
    this.ref = Math.random();
    this.delay = delay;
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

  erase() {
    delete(messages[this.ref]);
  }
}

export default Message;
