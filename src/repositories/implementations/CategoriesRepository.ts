import { prisma } from '../../database/prismaClient';
import { ICreateCategoryDataDTO } from '../../dtos/ICreateCategoryDataDTO';
import { Category } from '../../entities/Category';
// eslint-disable-next-line prettier/prettier
import { ICategoriesRepository } from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  async create({ name, description }: ICreateCategoryDataDTO): Promise<void> {
    await prisma.categories.create({
      data: {
        name,
        description,
      },
    });
  }

  async list(): Promise<Category[]> {
    const categories = await prisma.categories.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const user = await prisma.user.findUnique({
      where: {
        name,
      },
    });

    return user;
  }
}

export { CategoriesRepository };
