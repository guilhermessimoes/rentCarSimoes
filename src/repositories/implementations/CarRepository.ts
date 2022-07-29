import { Car } from '@prisma/client';

import { ICreateCarDataDTO } from '../../dtos/ICreateCarDataDTO';
import { prisma } from '../../shared/infra/database/prismaClient';
import { ICarsRepository } from '../ICarsRepository';
// eslint-disable-next-line prettier/prettier

export class CarRepository implements ICarsRepository {
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const licensePlate = await prisma.car.findFirst({
      where: {
        license_plate,
      },
    });

    return licensePlate;
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDataDTO): Promise<Car> {
    const car = await prisma.car.create({
      data: {
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
      },
    });

    return car;
  }

  async list(): Promise<Car[]> {
    const listCars = await prisma.car.findMany();

    return listCars;
  }

  async findAvailableAll(
    name?: string,
    category_id?: string,
    brand?: string,
  ): Promise<Car[]> {
    const listAvailable = await prisma.car.findMany({
      where: {
        available: true,
      },
    });
    if (brand) {
      const listBrand = await prisma.car.findMany({
        where: {
          brand,
          available: true,
        },
      });
      return listBrand;
    }
    if (name) {
      const listName = await prisma.car.findMany({
        where: {
          name,
          available: true,
        },
      });
      return listName;
    }
    if (category_id) {
      const listCategory = await prisma.car.findMany({
        where: {
          category_id,
          available: true,
        },
      });
      return listCategory;
    }
    return listAvailable;
  }
}
