import { IService } from '../interfaces/IService';
import { IMotorcycle, motorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class MotorcycleService implements IService<IMotorcycle> {
  private _motor: IModel<IMotorcycle>;

  constructor(model:IModel<IMotorcycle>) {
    this._motor = model;
  }

  public async create(obj: IMotorcycle): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._motor.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycle = await this._motor.read();
    if (!motorcycle) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return motorcycle;
  }

  public async readOne(_id:string):Promise<IMotorcycle> {
    const motorcycleById = await this._motor.readOne(_id);
    if (!motorcycleById) throw new Error(ErrorTypes.EntityNotFound);
    return motorcycleById;
  }

  public async update(_id:string, obj:IMotorcycle):Promise<IMotorcycle | null> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    await this.readOne(_id);
    return this._motor.update(_id, obj);
  }

  public async delete(_id:string):Promise<IMotorcycle> {
    const motorcycleDeleted = await this._motor.delete(_id);
    if (!motorcycleDeleted) throw new Error(ErrorTypes.EntityNotFound);
    return motorcycleDeleted;
  }
}

export default MotorcycleService;