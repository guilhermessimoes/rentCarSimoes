// eslint-disable-next-line import/no-unresolved
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
// eslint-disable-next-line import/no-unresolved
import { ImportCategoryController } from './importCategoryController';
// eslint-disable-next-line import/no-unresolved
import { ImportCategoryUseCase } from './importCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };
