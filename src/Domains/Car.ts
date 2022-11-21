import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  
  constructor(data: ICar) {
    const { doorsQty, seatsQty } = data;
    super(data);
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  getDoorsQty(): number {
    return this.doorsQty;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}

export default Car;
