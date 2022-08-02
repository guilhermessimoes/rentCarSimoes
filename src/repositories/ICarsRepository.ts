import { Car } from '@prisma/client';

import { ICreateCarDataDTO } from '../dtos/ICreateCarDataDTO';

export interface ICarsRepository {
  create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    specificationsCar,
  }: ICreateCarDataDTO): Promise<Car>;

  findByLicensePlate(license_plate: string): Promise<Car>;

  findAvailableAll(
    name?: string,
    category_id?: string,
    brand?: string,
  ): Promise<Car[]>;

  findById(id: string): Promise<Car>;
}
