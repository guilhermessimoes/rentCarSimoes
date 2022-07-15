import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);
