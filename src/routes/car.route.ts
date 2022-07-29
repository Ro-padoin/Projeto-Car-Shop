import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const carRouter = Router();
 
const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.get('/cars', (req, res) => carController.read(req, res));
carRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));
carRouter.post('/cars', (req, res) => carController.create(req, res));
carRouter.put('/cars/:id', (req, res) => carController.update(req, res));
carRouter.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default carRouter;