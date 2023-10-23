import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class SaleProduct {
  @PrimaryColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  quantity: number;
  @Column()
  price: number;
}
