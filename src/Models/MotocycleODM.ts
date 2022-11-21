import { Model, Schema, model, models } from 'mongoose';
import IMotocycle from '../Interfaces/IMotocycle';

class MotocycleODM {
  private _schema: Schema;
  private _model: Model<IMotocycle>;

  constructor() {
    this._schema = new Schema<IMotocycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: 'string', required: true },
      engineCapacity: { type: Number, required: true },
    });
    this._model = models.Motocycle || model('Motocycle', this._schema);
  }

  public async create(motocycle: IMotocycle): Promise<IMotocycle> {
    return this._model.create({ ...motocycle });
  }
}

export default MotocycleODM;