import { DataSource } from 'typeorm';

const datasource = new DataSource({
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
});

datasource.initialize();
