import Box from './box';
import DomElements from './domelements';

class Engine {
  constructor() {}

  render() {
    console.log('render')
  }

  runEngine() {
    const box = new Box();

    console.log(box)
    console.log('run engine')
  }
}

export default Engine;