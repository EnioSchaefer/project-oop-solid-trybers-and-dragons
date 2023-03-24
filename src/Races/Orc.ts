import Race from './Race';

export default class Orc extends Race {
  private static _createdInstances: number;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdInstances = (Orc._createdInstances || 0) + 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }
}