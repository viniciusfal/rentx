import { Request, Response } from 'express';
import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  private listCategoriesUseCase: ListCategoriesUseCase;

  constructor(listCategoryUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoryUseCase;
  }

  public handle(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export default ListCategoriesController;
