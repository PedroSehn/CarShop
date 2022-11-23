import { Request, Response } from 'express';
import MotocycleService from '../Services/MotorcycleService';

class MotocycleController {
  private _service = new MotocycleService();

  public createMoto = async (rec: Request, res: Response) => {
    const data = rec.body;
    const result = await this._service.createMotocycle(data);
    return res.status(201).json(result);
  };

  public getAll = async (rec: Request, res: Response) => {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  };

  public getById = async (rec: Request, res: Response) => {
    const { id } = rec.params;
    const response = await this._service.getById(id);
    return res.status(200).json(response);
  };
}

export default MotocycleController;
