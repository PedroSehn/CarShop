import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import IMotocycle from '../../src/Interfaces/IMotorcycle';
import MotocycleService from '../../src/Services/MotorcycleService';

const bodyMock = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const returnMock = {
  id: '637e8a6fc7897e93ad5e8d8e',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30,
  category: 'Street',
  engineCapacity: 600,
};

describe('Testando Services/MotoService', () => {
  afterEach(function () { return sinon.restore(); });

  describe('Testa função de create', () => {
    const Service = new MotocycleService();

    it('Deve retornar um objeto', async function () {
      sinon.stub(Model, 'create').resolves(returnMock);
      const result = await Service.createMotocycle(bodyMock as IMotocycle);
      expect(result).to.be.an('Object');
    });
  });
});