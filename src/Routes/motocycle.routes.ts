import express from 'express';
import MotocycleController from '../Controllers/MotocycleController';

const MotoRouter = express();

MotoRouter.post('/', (req, res) => new MotocycleController().createMoto(req, res));

export default MotoRouter;
