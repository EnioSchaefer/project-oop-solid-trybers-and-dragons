import Race from './Race';

export default class Dwarf extends Race {
  private static _createdInstances: number;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdInstances = (Dwarf._createdInstances || 0) + 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }
}