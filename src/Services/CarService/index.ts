import ICar from '../../Interfaces/ICar';
import Car from '../../Domains/Car';
import CarODM from '../../Models/CarODM';

class CarService {
  private CarDom = (car: ICar): Car => new Car(car);

  public createCar = async (object: ICar): Promise<Car> => {
    const result = await new CarODM().create(object);
    return this.CarDom(result);
  };

  public findAll = async (): Promise<Car[]> => {
    const response = await new CarODM().getAll();
    const result = response.map((car) => this.CarDom(car));
    return result;
  };

  public findById = async (id: string): Promise<Car | null> => {
    const response = await new CarODM().getById(id);
    if (!response) return response;
    const result = this.CarDom(response);
    return result;
  };
}

export default CarService;
