import express from 'express';
import CarController from '../Controllers/CarController';

const carRouter = express.Router();
// const carController = new CarController();

// carRouter.post('/', carController.createCar);
carRouter.post('/', (req, res) => new CarController().createCar(req, res));

export default carRouter;
