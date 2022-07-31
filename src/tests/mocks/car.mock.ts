import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: "Bronco Sport",
  year: 2022,
  color: "Azul Malacara",
  status: true,
  buyValue: 267.000,
  doorsQty: 4,
  seatsQty: 5,
}

const carMockWithError: Partial<ICar> = {
	model: "Bronco Sport",
  year: 2050,
  color: "Azul Malacara",
  status: true,
  buyValue: 267.000,
  doorsQty: 4,
  seatsQty: 5,
};

const _ID = '62e66acd194c02f7029a9d94';
const _ID_ERROR = '62e66acd194c02f7029a9d9j';

const carMockWithId: ICar & { _id: string } = {
	_id: _ID,
  model: "Bronco Sport",
  year: 2022,
  color: "Azul Malacara",
  status: true,
  buyValue: 267.000,
  doorsQty: 4,
  seatsQty: 5,
};

const carMockForChange: Partial<ICar> = {
	color: "Azul Lyse",
};

const carMockForChangeWithId: Partial<ICar> & { _id: string } = {
	_id: _ID,
  color: "Azul Lyse",
};

const allCarMock: ICar[] & { _id: string }[] = [
	{
    _id: _ID,
    model: "Bronco Sport",
    year: 2022,
    color: "Azul Malacara",
    status: true,
    buyValue: 267.000,
    doorsQty: 4,
    seatsQty: 5,
	}
];

export {
  carMock,
  carMockWithId,
  carMockForChange,
  carMockForChangeWithId,
  allCarMock,
  carMockWithError,
  _ID,
  _ID_ERROR
};
