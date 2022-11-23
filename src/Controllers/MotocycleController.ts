import { Request, Response } from 'express';
import MotocycleService from '../Services/MotocycleService';

class MotocycleController {
  private _service = new MotocycleService();

  public createMoto = async (rec: Request, res: Response) => {
    const data = rec.body;
    const result = await this._service.createMotocycle(data);
    return res.status(201).json(result);
  };
}

export default MotocycleController;
