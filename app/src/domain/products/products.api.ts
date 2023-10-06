import axios from '@/core/axios';
import type { Product } from './product.type';

export class ProductsApi {
  create(data: Partial<Product>) {
    return axios.post('/products', data).then((res) => res.data);
  }
}
