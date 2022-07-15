import { Category } from '@prisma/client';

import { ICreateCategoryDataDTO } from '../dtos/ICreateCategoryDataDTO';

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category | null>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDataDTO): Promise<void>;
}
