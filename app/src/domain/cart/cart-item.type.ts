import type { Product } from '../products/product.type';

export type CartItem = {
  id: number;
  product: Product;
  quantity: number;
};
