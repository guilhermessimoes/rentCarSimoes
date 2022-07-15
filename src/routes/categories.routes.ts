import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../useCases/createCategory/CreateCategoryController';
import { importCategoryController } from '../useCases/importCategories';
import { ListCategoriesController } from '../useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
