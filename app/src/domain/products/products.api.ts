import axios from '@/core/axios';
import type { Product } from './product.type';

export type FindProductsCriteria = { categoryId?: number };

export class ProductsApi {
  findAll(criteria: FindProductsCriteria = {}) {
    return axios.get('/products', { params: criteria }).then((res) => res.data);
  }

  create(data: Partial<Product>) {
    return axios.post('/products', data).then((res) => res.data);
  }
}
