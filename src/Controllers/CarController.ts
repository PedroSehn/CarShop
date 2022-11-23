import { Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private _service = new CarService();

  public createCar = async (rec: Request, res: Response) => {
    const data = rec.body;
    const result = await this._service.createCar(data);
    return res.status(201).json(result);
  };

  public findAll = async (_rec: Request, res: Response) => {
    const result = await this._service.findAll();
    return res.status(200).json(result);
  };

  public findById = async (rec: Request, res: Response) => {
    const { id } = rec.params;
    const result = await this._service.findById(id);
    if (!result) return result;
    return res.status(200).json(result);
  };

  public updateCar = async (rec: Request, res: Response) => {
    const { id } = rec.params;
    const data = rec.body;
    const result = await this._service.updateCar(id, data);
    return res.status(200).json(result);
  };
}

export default CarController;