import { apiConfig } from '@/apiConfig';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

export default axiosInstance;
