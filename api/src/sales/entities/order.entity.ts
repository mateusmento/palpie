import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SaleProduct } from './sale-product.entity';

export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;
  @ManyToOne(() => SaleProduct)
  product: SaleProduct;

  @Column()
  quantity: number;

  @ManyToOne(() => Order)
  order: Order;
}

export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: ['insert'] })
  items: OrderItem[];
}
