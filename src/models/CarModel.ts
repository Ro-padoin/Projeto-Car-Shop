import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: { type: Boolean, required: false },
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carSchema)) {
    super(model);
  }
}

export default Car;