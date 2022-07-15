import { ICreateSpecificationDataDTO } from '../dtos/ICreateSpecificationDataDTO';
import { Specification } from '../entities/Specification';

export interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDataDTO): void;
  findByName(name: string): Promise<Specification | null>;
}
