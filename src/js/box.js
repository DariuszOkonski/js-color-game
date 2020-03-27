class Box {
  constructor() {
    this.red = this.setColor();
    this.green = this.setColor();
    this.blue = this.setColor();
  }

  setColor() {
    return Math.floor(Math.random() * 256);
  }
}

export default Box;