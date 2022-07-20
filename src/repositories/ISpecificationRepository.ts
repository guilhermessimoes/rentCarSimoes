import { Specification } from '@prisma/client';
import { ICreateSpecificationDataDTO } from '../dtos/ICreateSpecificationDataDTO';

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDataDTO): void;
  findByName(name: string): Promise<Specification | null>;
}
