import axios from 'axios';

export * from './routes.constants';

export const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://htsv1-api.herokuapp.com'
    : 'http://localhost:1234';
   

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json ',
  },
});

const addTokenToRequest = async (req) => {
  const token = localStorage.getItem('11#221#');
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
