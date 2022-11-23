import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private _schema: Schema;
  private _model: Model<ICar>;

  constructor() {
    this._schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this._model = models.Car || model('Car', this._schema);
  }

  public async create(object: ICar): Promise<ICar> {
    return this._model.create({ ...object });
  }

  public async getAll(): Promise<ICar[]> {
    const result = this._model.find();
    return result;
  }

  public async getById(id: string): Promise<ICar | null > {
    const result = await this._model.findOne({ _id: id });
    return result;
  }

  public async updateCar(id: string, data: ICar): Promise<ICar | null> {
    await this._model.findOneAndUpdate({ _id: id }, data);
    return { id, ...data };
  }
}

export default CarODM;