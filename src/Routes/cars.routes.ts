import express from 'express';
import CarController from '../Controllers/CarController';
import validateID from '../Middleweres/ValidID';
import carExists from '../Middleweres/CarExists';

const carRouter = express.Router();
// const carController = new CarController();

// carRouter.post('/', carController.createCar);
carRouter.post('/', (req, res) => new CarController().createCar(req, res));
carRouter.get('/', (req, res) => new CarController().findAll(req, res));
carRouter.get('/:id', validateID, carExists, (req, res) => new CarController().findById(req, res));

export default carRouter;
