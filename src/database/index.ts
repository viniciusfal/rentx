import { DataSource } from 'typeorm';
import { CreateCategories1672976133007 } from './migrations/1672976133007-CreateCategories';
import { CreateSpeciications1673332242987 } from './migrations/1673332242987-CreateSpeciications';
import Category from '../modules/cars/entities/Category';
import Specification from '../modules/cars/entities/Specification';

const datasource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [Category, Specification],
  migrations: [CreateCategories1672976133007, CreateSpeciications1673332242987],
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return datasource.setOptions({ host }).initialize();
}

export default datasource;
