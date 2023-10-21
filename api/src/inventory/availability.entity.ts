import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Availability {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number;
  @Column()
  quantity: number;
  @Column()
  productId: number;
}
