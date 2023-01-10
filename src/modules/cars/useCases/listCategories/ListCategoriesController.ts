import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const allList = await listCategoriesUseCase.execute();

    return response.json(allList);
  }
}

export { ListCategoriesController };
