import axios from 'axios'

const baseAPI = axios.create({
  baseURL: 'http://localhost:8087/',
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const apiLoginAction = (customerJsonStr) => {
  return baseAPI.post('/customer/loginAction',customerJsonStr);
};

export const allProductAction = () => {
  return baseAPI.post('/product/all');
};

export const allOrders = (customer) => {
  return baseAPI.post('/orders/allOrders',customer);
}

// 攔截請求set token
baseAPI.interceptors.request.use(config => {
    const token = sessionStorage.getItem('myToken')
    config.headers.Authorization = `Bearer ${token}`
    return config
  }, error => {
    return Promise.reject(error)
})

// 攔截回復
baseAPI.interceptors.response.use(res => {
  res.data = JSON.stringify(res.data);
  return res;
})


