import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

const validateID = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const isValid = await isValidObjectId(id);
  if (!isValid) return res.status(422).json({ message: 'Invalid mongo id' });
  next();
};

export default validateID;
