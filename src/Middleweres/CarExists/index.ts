import { Request, Response, NextFunction } from 'express';
import CarService from '../../Services/CarService';

const service = new CarService();

const carExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await service.findById(id);
  if (!result) return res.status(404).json({ message: 'Car not found' });

  next();
};

export default carExists;
