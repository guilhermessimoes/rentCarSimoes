import { Specification } from '@prisma/client';

import { prisma } from '../../database/prismaClient';
import { ICreateSpecificationDataDTO } from '../../dtos/ICreateSpecificationDataDTO';
// eslint-disable-next-line prettier/prettier
import { ISpecificationRepository } from '../ISpecificationRepository';

export class SpecificationRepository implements ISpecificationRepository {
  async create({
    name,
    description,
  }: ICreateSpecificationDataDTO): Promise<void> {
    await prisma.specification.create({
      data: {
        name,
        description,
      },
    });
  }
  async findByName(name: string): Promise<Specification | null> {
    const specification = await prisma.specification.findFirst({
      where: {
        name,
      },
    });
    return specification;
  }
}
