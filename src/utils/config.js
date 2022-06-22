import Axios from 'axios';

const dev = process.env.NODE_ENV !== 'production';

Axios.defaults.baseURL = dev ? 'http://pwg-counter-api.test/api/count/' : '';
Axios.defaults.withCredentials = true;

export const configHeader = {
  headers: {
    'Content-Type': 'application/json',
  },
};
