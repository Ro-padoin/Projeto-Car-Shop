import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const car = Router();
 
const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

car.get('/cars', (req, res) => controller.read(req, res));
car.get('/cars/:id', (req, res) => controller.readOne(req, res));
car.post('/cars', (req, res) => controller.create(req, res));
car.put('/cars/:id', (req, res) => controller.update(req, res));
car.delete('/cars/:id', (req, res) => controller.delete(req, res));

export default car;