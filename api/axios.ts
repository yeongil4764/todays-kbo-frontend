import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    'https://port-0-todays-kbo-backend-mbvuay6v1dd37179.sel4.cloudtype.app/api/v1',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
