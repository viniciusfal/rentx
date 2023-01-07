import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  private createCategoryUseCase: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const category = await this.createCategoryUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(category);
  }
}

export { CreateCategoryController };
