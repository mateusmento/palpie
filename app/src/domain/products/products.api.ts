import { InjectAxios } from '@/core/axios';
import type { Product } from './product.type';
import { Axios } from 'axios';

export type FindProductsCriteria = { categoryId?: number };

export interface IProductApi {
  findAll(criteria: FindProductsCriteria): Promise<Product[]>;
  create(data: Partial<Product>): Promise<Product>;
}

export class ProductsApi implements IProductApi {
  constructor(@InjectAxios() private axios: Axios) {}

  findAll(criteria: FindProductsCriteria = {}) {
    return this.axios.get('/products', { params: criteria }).then((res) => res.data);
  }

  create(data: Partial<Product>) {
    return this.axios.post('/products', data).then((res) => res.data);
  }
}
