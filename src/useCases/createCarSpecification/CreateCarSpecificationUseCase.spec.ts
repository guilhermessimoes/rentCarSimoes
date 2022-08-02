import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '../../repositories/in-memory/SpecificationRepositoryInMemory';
import { AppError } from '../../shared/errors/AppError';
import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let carRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create car Specification', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
      specificationRepositoryInMemory,
    );
  });
  it('Should not be able to add a new specification to a now exists car', async () => {
    expect(async () => {
      const car_id = '1234';
      const specification_id = ['54321'];

      await createCarSpecificationUseCase.execute({ car_id, specification_id });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to add a new specification to the car', async () => {
    const car = await carRepositoryInMemory.create({
      name: 'Car',
      description: 'Descrição teste',
      daily_rate: 10,
      license_plate: 'ABC-1234',
      fine_amount: 20,
      brand: 'Brand teste',
      category_id: '123',
    });

    const specification = await specificationRepositoryInMemory.create({
      description: 'teste',
      name: 'teste',
    });

    const specification_id = [specification.id];

    const specificationCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id,
    });
    expect(specificationCars).toHaveProperty('specifications');
    expect(specificationCars.specifications.length).toBe(1);
  });
});
