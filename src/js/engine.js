import Box from './box';

class Engine {
  constructor() {
    this.level = 3;
    this.boxesList = this.setBoxesList();
    this.currentColor = this.setCurrentColor(this.boxesList);

    document.querySelector('[data-btn="easy"]').addEventListener('click', () => this.setLevel(3));
    document.querySelector('[data-btn="medium"]').addEventListener('click', () => this.setLevel(6));
    document.querySelector('[data-btn="hard"]').addEventListener('click', () => this.setLevel(9));
    document.querySelector('[data-btn="play-again"]').addEventListener('click', () => this.setLevel(this.level));
    document.querySelectorAll('.option').forEach(active => active.addEventListener('click', this.setActiveLevel));

    this.boxesContainer = document.querySelector('[data-container="boxes-container"]');
    this.colorNumberSpans = document.querySelectorAll('.color-number span');
    this.dataCheck = document.querySelector('[data-check="check"]');
    this.playAgain = document.querySelector('[data-btn="play-again"]');
    this.render();
  }

  render() {
    this.renderBoxes();
    this.renderColorsToFind();

    // console.clear();
    // console.log(this)
  }

  renderColorsToFind() {
    this.dataCheck.textContent = '';
    this.playAgain.textContent = 'new colors';
    this.colorNumberSpans[0].textContent = this.currentColor.red;
    this.colorNumberSpans[1].textContent = this.currentColor.green;
    this.colorNumberSpans[2].textContent = this.currentColor.blue;
  }

  renderBoxes() {
    this.boxesContainer.innerHTML = "";

    this.boxesList.forEach(box => {
      const div = document.createElement('div');
      div.classList.add('box')
      div.setAttribute('data-red', `${box.red}`);
      div.setAttribute('data-green', `${box.green}`);
      div.setAttribute('data-blue', `${box.blue}`);
      div.style.backgroundColor = `rgb(${box.red}, ${box.green}, ${box.blue})`;
      div.addEventListener('click', (e) => this.checkBox(e))
      this.boxesContainer.appendChild(div)
    })
  }

  renderWin(red, green, blue) {
    this.boxesContainer.innerHTML = "";

    this.dataCheck.textContent = 'correct';
    this.playAgain.textContent = 'play again';

    for (let i = 0; i < this.level; i++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      console.log(div)
      this.boxesContainer.appendChild(div);
    }
  }

  //=============================================================
  checkBox(e) {
    const red = Number(e.target.getAttribute('data-red'));
    const green = Number(e.target.getAttribute('data-green'));
    const blue = Number(e.target.getAttribute('data-blue'));


    if (this.currentColor.red === red && this.currentColor.green === green && this.currentColor.blue === blue) {
      this.renderWin(this.currentColor.red, this.currentColor.green, this.currentColor.blue);
    } else {
      this.dataCheck.textContent = 'try again';
      e.target.style.transition = '0.2s ease';
      e.target.style.opacity = '0';
    }
  }

  getCurrentColor() {
    return this.currentColor;
  }

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
    this.dataCheck.textContent = '';
    this.playAgain.textContent = 'new colors';
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