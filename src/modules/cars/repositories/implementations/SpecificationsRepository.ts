import { Repository } from 'typeorm';

import datasource from '../../../../database';
import Specification from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  public constructor() {
    this.repository = datasource.getRepository(Specification);
  }

  public async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOneBy({ name });

    return specification;
  }
}

export { SpecificationsRepository };
