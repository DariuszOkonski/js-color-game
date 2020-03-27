import Box from './box';

class Engine {
  constructor() {
    this.level = 3;
    this.boxesList = this.setBoxesList();
    document.querySelector('[data-btn="easy"]').addEventListener('click', () => this.setLevel(3));
    document.querySelector('[data-btn="medium"]').addEventListener('click', () => this.setLevel(6));
    document.querySelector('[data-btn="hard"]').addEventListener('click', () => this.setLevel(9));

    this.boxesContainer = document.querySelector('[data-container="boxes-container"]');
    this.render();
  }

  render() {
    this.boxesContainer.innerHTML = "";

    this.boxesList.forEach(box => {
      const div = document.createElement('div');
      div.classList.add('box')
      div.style.backgroundColor = `rgb(${box.red}, ${box.green}, ${box.blue})`;
      console.log(div)
      this.boxesContainer.appendChild(div)
    })
  }

  setBoxesList() {
    let tempArr = [];
    for (let i = 0; i < this.level; i++) {
      const box = new Box();
      tempArr.push(box);
    }
    return tempArr;
  }

  setLevel(level) {
    this.level = level;
    this.boxesList = this.setBoxesList();
    this.render();
  }

  runEngine() {

    console.log('run engine')
  }
}

export default Engine;