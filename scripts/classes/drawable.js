class Drawable {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  draw(context) {
    context.beginPath();
    context.lineWidth="5";
    context.strokeStyle="green";
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();
    context.closePath();
    this.translate();
  }
}

export default Drawable;
