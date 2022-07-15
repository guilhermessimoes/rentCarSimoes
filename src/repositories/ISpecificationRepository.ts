import { Specification } from '../model/Specification';

export interface ISpecificationRepositoryDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create({ name, description }: ISpecificationRepositoryDTO): void;
  findByName(name: string): Specification;
}
