import Race from './Race';

export default class Halfling extends Race {
  private static _createdInstances: number;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdInstances = (Halfling._createdInstances || 0) + 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }
}