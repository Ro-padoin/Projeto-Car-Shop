import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { Model } from 'mongoose';
import { 
  carMock,
	carMockWithId,
	carMockForChange,
	carMockForChangeWithId,
	allCarMock, _ID } from '../../mocks/car.mock';

describe('Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockForChangeWithId);
		sinon.stub(Model, 'find').resolves(allCarMock);
		sinon.stub(Model, 'findByIdAndRemove').resolves(carMockForChangeWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('Quando criar um novo item', () => {
		it('Quando a criação foi realizada com sucesso', async () => {
			const carFrame = await carModel.create(carMock);
			expect(carFrame).to.be.deep.equal(carMockWithId);
		});
	});
	describe('Quando buscar um item pelo Id', () => {
		it('Quando a busca foi realizada com sucesso', async () => {
			const carById = await carModel.readOne(_ID);
			expect(carById).to.be.deep.equal(carMockWithId);
		});

		it('Quando o id não for encontrado', async () => {
			try {
				await carModel.readOne('invalido');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
	describe('Quando atualizar um item', () => {
		it('Quando a atualização foi realizada com sucesso', async () => {
			const updatedCar = await carModel.update(_ID, carMockForChange);
			expect(updatedCar).to.be.deep.equal(carMockForChangeWithId);
		});

		it('Quando o id não for encontrado', async () => {
			try {
				await carModel.update('invalido', carMockForChange);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
	describe('Quando buscar por todos os itens cadastrados', () => {
		it('Quando a busca foi realizada com sucesso', async () => {
			const allCars = await carModel.read();
			expect(allCars).to.be.deep.equal(allCarMock);
		});
	});
	describe('Quando deletar um item', () => {
		it('Quando a exclusão foi realizada com sucesso', async () => {
			const deletedCar = await carModel.delete(_ID);
			expect(deletedCar).to.be.deep.equal(carMockForChangeWithId);
		});

		it('Quando o id não for encontrado', async () => {
			try {
				await carModel.delete('invalido');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});