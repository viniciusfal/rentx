import { User } from '../entities/User';

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
