import ICar from '../../Interfaces/ICar';
import Car from '../../Domains/Car';
import CarODM from '../../Models/CarODM';

class CarService {
  private CarDom = (car: ICar): Car => new Car(car);

  public createCar = async (object: ICar): Promise<Car> => {
    const result = await new CarODM().create(object);
    return this.CarDom(result);
  };

  public findAll = async (): Promise<ICar[]> => {
    const result = await new CarODM().getAll();
    return result;
  };

  public findById = async (id: string): Promise<ICar | null> => {
    const result = await new CarODM().getById(id);
    return result;
  };
}

export default CarService;
