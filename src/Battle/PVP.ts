import Character from '../Character';
import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighter01: Character | Fighter;
  private _fighter02: Character | Fighter;

  constructor(fighter01: Character | Fighter, fighter02: Character | Fighter) {
    super(fighter01);
    this._fighter01 = fighter01;
    this._fighter02 = fighter02;
  }

  get fighter01(): Character | Fighter {
    return this._fighter01;
  }

  get fighter02(): Character | Fighter {
    return this._fighter02;
  }

  private pickFighter(): void {
    const result = getRandomInt(1, 11) < 5;
    if (result) this._fighter01.attack(this._fighter02);
    if (result) this._fighter02.attack(this._fighter01);
  }
  
  fight(): number {
    while (this._fighter01.lifePoints !== -1 
      && this._fighter02.lifePoints !== -1) {
      this.pickFighter();
    }
    return super.fight();
  }
}