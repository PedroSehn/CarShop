import IMotocycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(data: IMotocycle) {
    const { category, engineCapacity } = data;
    super(data);
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  getEngineCapacity(): number {
    return this.engineCapacity;
  }

  setengineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  getcategory(): 'Street' | 'Custom' | 'Trail' {
    return this.category;
  }

  setcategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }
}

export default Motorcycle;
