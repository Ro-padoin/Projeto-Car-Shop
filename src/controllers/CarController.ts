import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>) {
    const newCar = await this._service.create(req.body);
    return res.status(201).json(newCar);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const allCars = await this._service.read();
    return res.status(200).json(allCars);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const carById = await this._service.readOne(id);    
    return res.status(200).json(carById);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const updatedCar = await this._service.update(id, req.body);    
    return res.status(200).json(updatedCar);
  }
}

export default CarController;