import express from 'express';
import MotocycleController from '../Controllers/MotocycleController';
import validateID from '../Middleweres/ValidID';
import MotorcycleExists from '../Middleweres/MotoExists';

const MotoRouter = express();

MotoRouter.post('/', (req, res) => new MotocycleController().createMoto(req, res));
MotoRouter.get('/', validateID, (req, res) => new MotocycleController().getAll(req, res));
MotoRouter.get(
  '/:id', 
  validateID, 
  MotorcycleExists,
  (req, res) => new MotocycleController().getById(req, res),
);

export default MotoRouter;
