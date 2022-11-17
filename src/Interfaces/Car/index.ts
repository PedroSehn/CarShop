import IVehicle from '../Vehicle';

interface ICar extends IVehicle {
  doorsQty: number;
  seatsQty: number;
}

export default ICar;
