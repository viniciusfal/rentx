import { DataSource } from 'typeorm';
import { CreateCategories1672976133007 } from './migrations/1672976133007-CreateCategories';
import Category from '../modules/cars/entities/Category';

const datasource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  entities: [Category],
  migrations: [CreateCategories1672976133007],
});

export function createConnection(host = 'database'): Promise<DataSource> {
  return datasource.setOptions({ host }).initialize();
}

export default datasource;
