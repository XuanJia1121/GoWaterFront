import axios from 'axios'

const customerAPI = axios.create({
  baseURL: `/api/${customerUrl}`,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// 攔截請求
$http.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  }, error => {
    return Promise.reject(error)
})

