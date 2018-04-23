import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-builder-70c57.firebaseio.com/'
});

export default axiosOrders;
