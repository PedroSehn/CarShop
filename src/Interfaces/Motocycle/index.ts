import IVehicle from '../Vehicle';

interface IMotocyble extends IVehicle {
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}

export default IMotocyble;
