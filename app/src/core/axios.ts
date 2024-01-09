import axios from 'axios';
import { inject } from 'tsyringe';

export const InjectAxios = () => inject('axios');

export const createAxios = () =>
  axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

export default createAxios();
