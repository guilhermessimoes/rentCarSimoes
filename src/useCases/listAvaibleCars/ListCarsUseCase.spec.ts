import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { ListAvailableUseCase } from './ListAvailableUseCase';

let listAvailableUseCase: ListAvailableUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableUseCase = new ListAvailableUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Descrição carro',
      daily_rate: 140,
      license_plate: 'GUI-1234',
      fine_amount: 30,
      brand: 'Brand teste',
      category_id: 'category_id',
    });

    const cars = await listAvailableUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Descrição carro',
      daily_rate: 140,
      license_plate: 'GUI-1234',
      fine_amount: 30,
      brand: 'Car_brand_test',
      category_id: '12345',
    });

    const cars = await listAvailableUseCase.execute({
      brand: 'Car_brand_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Descrição carro',
      daily_rate: 140,
      license_plate: 'GUI-1234',
      fine_amount: 30,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableUseCase.execute({
      name: 'Car3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category_id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Descrição carro',
      daily_rate: 140,
      license_plate: 'GUI-1234',
      fine_amount: 30,
      brand: 'Car_brand_test',
      category_id: '123456',
    });

    const cars = await listAvailableUseCase.execute({
      category_id: '123456',
    });

    expect(cars).toEqual([car]);
  });
});
