import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '142205b65753a1173f11d5f44c0912cd',
    language: 'pt-BR',
    page: 1,
  },
});

export default api;
