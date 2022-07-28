import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '../../shared/errors/AppError';
import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create a car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car',
      description: 'Descrição teste',
      daily_rate: 10,
      license_plate: 'ABC-1234',
      fine_amount: 20,
      brand: 'Brand teste',
      category_id: '123',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a car with exists license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Car  1',
        description: 'Descrição teste',
        daily_rate: 10,
        license_plate: 'ABC-1234',
        fine_amount: 20,
        brand: 'Brand teste',
        category_id: '123',
      });

      await createCarUseCase.execute({
        name: 'Car 2',
        description: 'Descrição teste',
        daily_rate: 10,
        license_plate: 'AB',
        fine_amount: 20,
        brand: 'Brand teste',
        category_id: '123',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a car with default available true', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car Available',
      description: 'Descrição teste',
      daily_rate: 10,
      license_plate: 'ABCD-1234',
      fine_amount: 20,
      brand: 'Brand teste',
      category_id: '123',
    });
    expect(car.available).toBe(true);
  });
});
