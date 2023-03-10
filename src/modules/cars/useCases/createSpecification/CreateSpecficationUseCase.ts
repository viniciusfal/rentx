import { inject, injectable } from 'tsyringe';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import Specification from '../../entities/Specification';
import { AppError } from '../../../../errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepository,
  ) {}

  public async execute({
    name,
    description,
  }: IRequest): Promise<Specification> {
    const specificationsAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationsAlreadyExists) {
      throw new AppError('This Specification already Exists');
    }

    const specification = this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
