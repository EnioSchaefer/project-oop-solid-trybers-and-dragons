import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 11);
    const standardRace = new Elf(this._name, this._dexterity);
    const standardArchetype = new Mage(this._name);
    this._race = standardRace;
    this._archetype = standardArchetype;
    this._maxLifePoints = standardRace.maxLifePoints / 2;
    this._lifePoints = standardRace.maxLifePoints / 2;
    this._strength = getRandomInt(1, 11);
    this._defense = getRandomInt(1, 11);
    this._energy = { 
      type_: standardArchetype.energyType,
      amount: getRandomInt(1, 11) };
  }

  get defense(): number {
    return this._defense;
  }

  get strength(): number {
    return this._strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    let currLifePoints = this._lifePoints;

    if (damage <= 0) currLifePoints -= 1;
    if (damage > 0) currLifePoints -= damage;

    if (currLifePoints <= 0) this._lifePoints = -1;
    else this._lifePoints = currLifePoints;

    return currLifePoints;
  }
  
  public attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 11);
    this._strength += getRandomInt(1, 11);
    this._dexterity += getRandomInt(1, 11);
    this._defense += getRandomInt(1, 11);
    this._energy.amount = 10;
    
    const { maxLifePoints } = this._race;
    
    if (this._maxLifePoints > maxLifePoints) {
      this._maxLifePoints = maxLifePoints; 
    }

    this._lifePoints = this._maxLifePoints;
  }

  public special(/* enemy: Fighter | SimpleFighter */): void {
    console.log(`IMPLEMENT SPECIAL ATTACK FOR ${this._name}`);
  }
}
