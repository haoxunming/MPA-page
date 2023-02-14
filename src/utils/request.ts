import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const isProd = !!(process.env.NODE_ENV === 'production')

// 创建axios实例
const service = axios.create({
  baseURL: isProd ? process.env.VUE_APP_API_URL : '',
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
