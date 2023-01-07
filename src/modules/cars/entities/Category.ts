import { v4 as uuid } from 'uuid';
import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Category;
