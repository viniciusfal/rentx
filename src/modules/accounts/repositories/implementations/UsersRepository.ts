import { Repository } from 'typeorm';
import datasource from '../../../../database';
import { User } from '../../entities/User';
import { ICreateUserDTO, IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  public constructor() {
    this.repository = datasource.getRepository(User);
  }

  public async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOneBy({ email });

    return user;
  }

  public async findById(id: string): Promise<User> {
    const user = this.repository.findOneBy({ id });

    return user;
  }
}

export { UsersRepository };
