import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../../Services/MotorcycleService';

const service = new MotorcycleService();

const MotorcycleExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const result = await service.getById(id);
  if (!result) return res.status(404).json({ message: 'Motorcycle not found' });

  next();
};

export default MotorcycleExists;
