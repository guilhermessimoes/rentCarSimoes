import { Router } from 'express';

import { CreateCarController } from '../../../../useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '../../../../useCases/createCarSpecification/CreateCarSpecificationController';
import { ListAvailableController } from '../../../../useCases/listAvaibleCars/ListAvailableController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableController = new ListAvailableController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);
