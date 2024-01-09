import { InjectAxios } from '@/core/axios';
import type { Axios } from 'axios';
import { injectable } from 'tsyringe';

export type FindCategoryCriteria = { name?: string };

@injectable()
export class CategoriesApi {
  constructor(@InjectAxios() private axios: Axios) {}

  findAll(criteria: FindCategoryCriteria = {}) {
    return this.axios.get<any[]>('/categories', { params: criteria }).then((res) => res.data);
  }

  create(data: any) {
    return this.axios.post('/categories', data).then((res) => res.data);
  }
}
