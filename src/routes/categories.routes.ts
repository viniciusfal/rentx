import { Router } from 'express';
import multer from 'multer';
import createCategoryController from '../modules/cars/useCases/createCategory/index';
import listCategoryController from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

// Estou passando o '/categories' na hora que implemento o metodo no server.ts
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  importCategoryController.handle(request, response);
});

export default categoriesRoutes;
