import type { Category } from './category.type';

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  categories: Category[];
}
