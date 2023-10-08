import axios from '@/core/axios';

export type FindCategoryCriteria = { name?: string };

export class CategoriesApi {
  findAll(criteria: FindCategoryCriteria = {}) {
    return axios.get<any[]>('/categories', { params: criteria }).then((res) => res.data);
  }

  create(data: any) {
    return axios.post('/categories', data).then((res) => res.data);
  }
}
