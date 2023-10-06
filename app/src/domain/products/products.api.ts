import axios from '@/core/axios';
import type { Product } from './product.type';

export class ProductsApi {
  findAll() {
    return axios.get('/products').then((res) => res.data);
  }

  create(data: Partial<Product>) {
    return axios.post('/products', data).then((res) => res.data);
  }
}
