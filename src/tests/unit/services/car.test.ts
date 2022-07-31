import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { allCarMock, carMock, carMockWithId, _ID, _ID_ERROR } from '../../mocks/car.mock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read')
    .onCall(0).resolves(allCarMock)
    .onCall(1).resolves();
		sinon.stub(carModel, 'update').resolves(carMockWithId) 
    sinon.stub(carModel, 'readOne')
    .onCall(0).resolves(carMockWithId) 
    .onCall(1).resolves()
    .onCall(2).resolves(carMockWithId)  
    sinon.stub(carModel, 'delete')
    .onCall(0).resolves(carMockWithId)
    .onCall(1).resolves();
	})
	after(() => {
		sinon.restore()
	})
	describe('Quando criar um novo item', () => {
    it('Quando a criação foi realizada com sucesso', async () => {
      const newCar = await carService.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
    it('Quando a criação não foi realizada com sucesso', async () => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
	});
  describe('Quando buscar por todos os itens cadastrados', () => {
    it('Quando a busca foi realizada com sucesso', async () => {
      const allCars = await carService.read();
      expect(allCars).to.be.deep.equal(allCarMock);
    });
    it('Quando nenhum item não for encontrado', async () => {
      try {
        await carService.read();
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
      }
    });
  });
	describe('Quando buscar um item pelo Id', () => {
    it('Quando a busca foi realizada com sucesso', async () => {
      const carById = await carService.readOne(_ID);
      expect(carById).to.be.deep.equal(carMockWithId);
    });
    it('Quando o id não for encontrado', async () => {
      try {
        await carService.readOne(_ID);
      } catch (error:any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
	});
  describe('Quando atualizar um item', () => {
		it('Quando a atualização foi realizada com sucesso', async () => {
		  const updatedCar = await carService.update(_ID, carMock);
		  expect(updatedCar).to.be.deep.equal(carMockWithId);
		});

    it('Quando quanto houver um erro', async () => {
      try {
        await carService.update(_ID, {} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
	});
});
  describe('Quando deletar um item', () => {
		it('Quando a exclusão foi realizada com sucesso', async () => {
		  const deletedCar = await carService.delete(_ID);
		  expect(deletedCar).to.be.deep.equal(carMockWithId);
		});
    it('Quando o id não for encontrado', async () => {
      try {
        await carService.delete(_ID_ERROR);
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.EntityNotFound);
      }
    });
	});
});