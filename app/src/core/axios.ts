import axios from 'axios';

const host = import.meta.env.VITE_PALPIE_API_HOST;

export default axios.create({
  baseURL: `http://${host}`,
});
