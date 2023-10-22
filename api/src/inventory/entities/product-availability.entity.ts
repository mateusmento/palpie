import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ProductAvailability {
  @PrimaryColumn()
  id: number;
  @Column()
  quantity: number;
}
