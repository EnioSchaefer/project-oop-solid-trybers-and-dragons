import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() { 
    super(999);
    console.log(this.lifePoints);
  }
}