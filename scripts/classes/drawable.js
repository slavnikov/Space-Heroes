class Drawable {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  draw(context) {
    context.beginPath();
    context.fillStyle="green";
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
    context.closePath();
  }
}

export default Drawable;
