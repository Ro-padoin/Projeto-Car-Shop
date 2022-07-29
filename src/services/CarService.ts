import { IService } from '../interfaces/IService';
import { ICar, carZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    const car = await this._car.read();
    if (!car) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return car;
  }

  public async readOne(_id:string):Promise<ICar> {
    const carById = await this._car.readOne(_id);
    if (!carById) throw new Error(ErrorTypes.EntityNotFound);
    return carById;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    await this.readOne(_id);
    return this._car.update(_id, obj);
  }

  public async delete(_id:string):Promise<ICar> {
    const carDeleted = await this._car.delete(_id);
    if (!carDeleted) throw new Error(ErrorTypes.EntityNotFound);
    return carDeleted;
  }
}

export default CarService;