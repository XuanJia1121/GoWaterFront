import axios from 'axios'

const customerAPI = axios.create({
  baseURL: 'http://localhost:8087/customer/',
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const loginAction = (customerJsonStr) => {
  return customerAPI.post('/loginAction',customerJsonStr);
};

/*
// 攔截請求
$http.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  }, error => {
    return Promise.reject(error)
})
*/

