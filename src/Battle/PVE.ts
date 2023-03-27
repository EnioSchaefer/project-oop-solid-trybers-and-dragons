import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _charFighter: Character | Fighter;
  private _monsters: Monster[] | Fighter[] | SimpleFighter[];

  constructor(
    charFighter: Character | Fighter,
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(charFighter);
    this._charFighter = charFighter;
    this._monsters = monsters;
  }

  get charFighter(): Character | Fighter {
    return this._charFighter;
  }

  get monsters(): Monster[] | Fighter[] | SimpleFighter[] {
    return this._monsters;
  }

  private pickFighter(): void {
    const randomNum = getRandomInt(1, 4);
    const playerAttack = randomNum === 1 || randomNum === 2;
    const monsterPos = this._monsters
      .findIndex((monster) => monster.lifePoints !== -1);

    if (playerAttack) { 
      return this._charFighter.attack(this._monsters[monsterPos]);
    }
    return this._monsters
      .forEach((monster) => monster.attack(this._charFighter));
  }

  fight(): number {
    while (this._charFighter.lifePoints !== -1
      && this._monsters.some((monster) => monster.lifePoints !== -1)) {
      this.pickFighter();
    }
    return super.fight();
  }
}