import axios from 'axios'

const baseAPI = axios.create({
  baseURL: 'http://localhost:8087/api/',
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

//登入
export const apiLoginAction = (customerJsonStr) => {
  return baseAPI.post('/customer/login',customerJsonStr);
};

//查所有商品
export const allProductAction = () => {
  return baseAPI.get('/product/all');
};

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


