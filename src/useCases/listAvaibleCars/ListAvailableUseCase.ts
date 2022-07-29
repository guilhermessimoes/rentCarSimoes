import { Car } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

import { ICarsRepository } from '../../repositories/ICarsRepository';

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
export class ListAvailableUseCase {
  constructor(
    @inject('CarRepository')
    private carsRepository: ICarsRepository,
  ) {}
  async execute({ name, category_id, brand }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailableAll(
      name,
      category_id,
      brand,
    );

    return cars;
  }
}
