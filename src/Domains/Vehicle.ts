import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(data: IVehicle) {
    const { id, model, year, color, status, buyValue } = data;
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }

  getId(): string | undefined {
    return this.id;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string) {
    this.model = model;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number) {
    this.year = year;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getStatus(): boolean | undefined {
    return this.status;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getBuyValue(): number {
    return this.buyValue;
  }

  setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
}

export default Vehicle;
