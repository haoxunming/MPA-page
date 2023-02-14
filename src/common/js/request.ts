import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 20000
})

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config.headers['Content-Type'] = ''
    // if (config.headers['Content-Type']) {
    //   // config.headers['Content-Type'] = 'application/json'
    // } else {
    //   config.headers['Content-Type'] = ''
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // console.log(response)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
