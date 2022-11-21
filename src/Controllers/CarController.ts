import { Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private _service = new CarService();

  public createCar = async (rec: Request, res: Response) => {
    const data = rec.body;
    const result = await this._service.createCar(data);
    return res.status(201).json(result);
  };
}

export default CarController;