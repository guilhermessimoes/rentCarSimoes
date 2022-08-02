import { Car } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { ICarsRepository } from '../../repositories/ICarsRepository';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';
import { AppError } from '../../shared/errors/AppError';

interface IRequest {
  car_id: string;
  specification_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarRepository')
    private carsRepository: ICarsRepository,
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository,
  ) {}
  async execute({ car_id, specification_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError('Car does not exists!');
    }

    const specifications = await this.specificationRepository.findByIds(
      specification_id,
    );

    carExists.specificationsCar = specifications;

    await this.carsRepository.create(carExists);

    return carExists;
  }
}
