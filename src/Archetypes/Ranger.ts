import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Ranger extends Archetypes {
  private static _createdInstances: number;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdInstances = (Ranger._createdInstances || 0) + 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }
}