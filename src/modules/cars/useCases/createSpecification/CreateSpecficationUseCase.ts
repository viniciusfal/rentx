import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  private specificationsRepository: SpecificationsRepository;

  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  public execute({ name, description }: IRequest) {
    const specificationsAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationsAlreadyExists) {
      throw new Error('This Specification already Exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
