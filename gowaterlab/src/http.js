import axios from 'axios'

const $http = axios.create({
  baseURL: process.env.VUE_APP_API
})

// 攔截請求
$http.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  }, error => {
    return Promise.reject(error)
  })

