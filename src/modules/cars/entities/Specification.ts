import { v4 as uuid } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('specifications')
class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Specification;
