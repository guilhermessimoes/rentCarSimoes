import { Specification } from '@prisma/client';

import { ICreateSpecificationDataDTO } from '../../dtos/ICreateSpecificationDataDTO';
import { prisma } from '../../shared/infra/database/prismaClient';
// eslint-disable-next-line prettier/prettier
import { ISpecificationRepository } from '../ISpecificationRepository';

export class SpecificationRepository implements ISpecificationRepository {
  async create({
    name,
    description,
  }: ICreateSpecificationDataDTO): Promise<Specification> {
    const specification = await prisma.specification.create({
      data: {
        name,
        description,
      },
    });

    return specification;
  }
  async findByName(name: string): Promise<Specification | null> {
    const specification = await prisma.specification.findFirst({
      where: {
        name,
      },
    });
    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specification = await prisma.specification.findFirst({
      where: {
        specification_id,
        car_id,
      },
    });
    return specification;
  }
}
