import { Router } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleService';

const motor = Router();
 
const model = new MotorcycleModel();
const service = new MotorcycleService(model);
const controller = new MotorcycleController(service);

const DEFAULT_ID_ROUTE = '/motorcycles/:id';

motor.get('/motorcycles', (req, res) => controller.read(req, res));
motor.get(DEFAULT_ID_ROUTE, (req, res) => controller.readOne(req, res));
motor.post('/motorcycles', (req, res) => controller.create(req, res));
motor.put(DEFAULT_ID_ROUTE, (req, res) => controller.update(req, res));
motor.delete(DEFAULT_ID_ROUTE, (req, res) => controller.delete(req, res));

export default motor;