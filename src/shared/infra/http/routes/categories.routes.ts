import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../../../useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../../../../useCases/importCategories/ImportCategoryController';
import { ListCategoriesController } from '../../../../useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };