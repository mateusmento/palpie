import axios from '@/core/axios';

export class CategoriesApi {
  findAll() {
    return axios.get('/categories').then((res) => res.data);
  }

  create(data: any) {
    return axios.post('/categories', data).then((res) => res.data);
  }
}
