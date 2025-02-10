import axios from 'axios'

const AxiosInstance1 = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
  });

  export default AxiosInstance1;