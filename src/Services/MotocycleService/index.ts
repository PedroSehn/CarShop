import IMotocycle from '../../Interfaces/IMotorcycle';
import Motocycle from '../../Domains/Motorcycle';
import MotocycleODM from '../../Models/MotorcycleODM';

class MotocycleService {
  private MotoDom = (moto: IMotocycle): Motocycle => new Motocycle(moto);

  public createMotocycle = async (data: IMotocycle) => {
    const result = await new MotocycleODM().create(data);
    return this.MotoDom(result);
  };
}

export default MotocycleService;
