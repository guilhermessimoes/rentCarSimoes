import { Category } from '@prisma/client';

import { prisma } from '../../database/prismaClient';
import { ICreateCategoryDataDTO } from '../../dtos/ICreateCategoryDataDTO';
// eslint-disable-next-line prettier/prettier
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  // private repository: Repository<Category>;

  // constructor() {
  //   this.repository = getRepository(Category);
  // }

  async create({ name, description }: ICreateCategoryDataDTO): Promise<void> {
    await prisma.category.create({
      data: {
        name,
        description,
      },
    });
  }

  async list(): Promise<Category[]> {
    const listCategories = await prisma.category.findMany();

    return listCategories;
  }

  async findByName(name: string): Promise<Category | null> {
    const user = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    return user;
  }
}

export { CategoriesRepository };
