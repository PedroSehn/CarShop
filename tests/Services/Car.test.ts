import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../src/Services/CarService';

const bodyMock = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const returnMock = {
  id: '637e8531c7897e93ad5e8d8c',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

describe('Testando Services/CarService', () => {
  afterEach(function () { return sinon.restore(); });
  
  describe('Testando criação de carro', () => {
    const Service = new CarService();

    it('Deve retornar um objeto com id', async function () {
      sinon.stub(Model, 'create').resolves(returnMock);
      const result = await Service.createCar(bodyMock);
      expect(result).to.be.an('Object');
    });
  });

  describe('Testa funçoes de Find', () => {
    const Service = new CarService();
    it('Testa função getAll', async function () {
      sinon.stub(Model, 'find').resolves([returnMock]);
      const result = await Service.findAll();
      expect(result).to.be.an('Array');
    });

    it('Testa função getById', async function () {
      sinon.stub(Model, 'findOne').resolves(returnMock);
      const result = await Service.findById('637e8531c7897e93ad5e8d8c');
      expect(result).to.haveOwnProperty('id');
    });
  });
});