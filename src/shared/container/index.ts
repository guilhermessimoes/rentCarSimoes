import { container } from 'tsyringe';

import { ICarsRepository } from '../../repositories/ICarsRepository';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CarRepository } from '../../repositories/implementations/CarRepository';
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

container.registerSingleton<ICarsRepository>('CarRepository', CarRepository);
