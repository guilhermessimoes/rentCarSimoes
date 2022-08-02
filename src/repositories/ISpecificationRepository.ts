import { Specification } from '@prisma/client';

import { ICreateSpecificationDataDTO } from '../dtos/ICreateSpecificationDataDTO';

export interface ISpecificationRepository {
  create({
    name,
    description,
  }: ICreateSpecificationDataDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification | null>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
