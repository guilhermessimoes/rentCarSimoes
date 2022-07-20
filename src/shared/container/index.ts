import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
