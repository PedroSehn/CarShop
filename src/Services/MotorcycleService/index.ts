import IMotocycle from '../../Interfaces/IMotorcycle';
import Motocycle from '../../Domains/Motorcycle';
import MotocycleODM from '../../Models/MotorcycleODM';

class MotocycleService {
  private MotoDom = (moto: IMotocycle): Motocycle => new Motocycle(moto);

  public createMotocycle = async (data: IMotocycle) => {
    const result = await new MotocycleODM().create(data);
    return this.MotoDom(result);
  };

  public getAll = async () => {
    const response = await new MotocycleODM().getAll();
    const result = response.map((moto) => this.MotoDom(moto));
    return result;
  };
  
  public getById = async (id: string) => {
    const response = await new MotocycleODM().getById(id);
    if (!response) return response;
    return this.MotoDom(response);
  };
}

export default MotocycleService;
