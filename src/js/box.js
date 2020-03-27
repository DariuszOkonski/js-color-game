class Box {
  constructor() {
    this.red = this.setColor();
    this.green = this.setColor();
    this.blue = this.setColor();
    this.visibility = true;
  }

  setColor() {
    return Math.floor(Math.random() * 256);
  }

  changeVisible() {
    this.visibility = false;
  }
}

export default Box;