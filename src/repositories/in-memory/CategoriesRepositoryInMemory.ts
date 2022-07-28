import { ICreateCategoryDataDTO } from '../../dtos/ICreateCategoryDataDTO';
import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
  async list(): Promise<Category[]> {
    const listAllCategories = this.categories;
    return listAllCategories;
  }
  async create({ name, description }: ICreateCategoryDataDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}
