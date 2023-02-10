import { DataSource } from 'typeorm';
import { CreateCategories1672976133007 } from './migrations/1672976133007-CreateCategories';
import { CreateSpeciications1673332242987 } from './migrations/1673332242987-CreateSpeciications';
import { CreateUsers1673551845904 } from './migrations/1673551845904-CreateUsers';
import { AltColumnDeleteUsername1673560619688 } from './migrations/1673560619688-AltColumnDeleteUsername';
import Category from '../modules/cars/entities/Category';
import Specification from '../modules/cars/entities/Specification';
import { User } from '../modules/accounts/entities/User';

const datasource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories1672976133007,
    CreateSpeciications1673332242987,
    CreateUsers1673551845904,
    AltColumnDeleteUsername1673560619688,
  ],
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return datasource.setOptions({ host }).initialize();
}

export default datasource;
