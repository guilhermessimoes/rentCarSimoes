import { Category } from '@prisma/client';

import { ICreateCategoryDataDTO } from '../../dtos/ICreateCategoryDataDTO';
import { prisma } from '../../shared/infra/database/prismaClient';
// eslint-disable-next-line prettier/prettier
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
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
