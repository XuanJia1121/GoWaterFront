import axios from 'axios'

const baseAPI = axios.create({
  baseURL: 'http://localhost:8087/api/',
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

//------------------------------------------CUSTOMER-------------------------------------------

//登入
export const apiLoginAction = (customerJsonStr) => {
  return baseAPI.post('/customer/login',customerJsonStr);
};

//查詢訂單
export const allOrderAction = (cid) => {
  return baseAPI.post('/order/orders',cid);
}

//新增訂單
export const addOrderAction = (order) => {
  return baseAPI.post('/order/add',order);
}


//------------------------------------------PRODUCT-------------------------------------------

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


