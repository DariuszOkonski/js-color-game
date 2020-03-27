import Box from './box';

class Engine {
  constructor() {
    this.level = 3;
    this.boxesList = this.setBoxesList();
    this.currentColor = this.setCurrentColor(this.boxesList);

    document.querySelector('[data-btn="easy"]').addEventListener('click', () => this.setLevel(3));
    document.querySelector('[data-btn="medium"]').addEventListener('click', () => this.setLevel(6));
    document.querySelector('[data-btn="hard"]').addEventListener('click', () => this.setLevel(9));
    document.querySelectorAll('.option').forEach(active => active.addEventListener('click', this.setActiveLevel))

    this.boxesContainer = document.querySelector('[data-container="boxes-container"]');
    this.colorNumberSpans = document.querySelectorAll('.color-number span');
    this.render();
  }

  render() {
    this.renderBoxes();
    this.renderColorsToFind();

    console.clear();
    console.log(this)
  }

  renderColorsToFind() {
    this.colorNumberSpans[0].textContent = this.currentColor.red;
    this.colorNumberSpans[1].textContent = this.currentColor.green;
    this.colorNumberSpans[2].textContent = this.currentColor.blue;
  }

  renderBoxes() {
    this.boxesContainer.innerHTML = "";

    this.boxesList.forEach(box => {
      const div = document.createElement('div');
      div.classList.add('box')
      div.style.backgroundColor = `rgb(${box.red}, ${box.green}, ${box.blue})`;
      this.boxesContainer.appendChild(div)
    })
  }

  //=============================================================
  setBoxesList() {
    let tempArr = [];
    for (let i = 0; i < this.level; i++) {
      const box = new Box();
      tempArr.push(box);
    }

    return tempArr;
  }

  setCurrentColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setLevel(level) {
    this.level = level;
    this.boxesList = this.setBoxesList();
    this.currentColor = this.setCurrentColor(this.boxesList);
    this.render();
  }

  setActiveLevel() {
    document.querySelectorAll('.option').forEach(active => {
      active.classList.remove('active')
    })
    this.classList.add('active');
  }

}

export default Engine;