import ICar from '../../Interfaces/ICar';
import Car from '../../Domains/Car';
import CarODM from '../../Models/CarODM';

class CarService {
  constructor(
    private _CarODM = new CarODM(),
  ) { }

  private CarDom = (car: ICar): Car => new Car(car);

  public createCar = async (object: ICar): Promise<Car> => {
    const result = await this._CarODM.create(object);
    return this.CarDom(result);
  };
}

export default CarService;
