import { DataSource } from 'typeorm';
import { CreateCategories1672976133007 } from './migrations/1672976133007-CreateCategories';

const datasource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  migrations: [CreateCategories1672976133007],
});

datasource.initialize();

export default datasource;
