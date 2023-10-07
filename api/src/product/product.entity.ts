import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('identity', { generatedIdentity: 'ALWAYS' })
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToMany(() => Category)
  @JoinTable({ name: 'product_categories' })
  categories: Category[];
}
