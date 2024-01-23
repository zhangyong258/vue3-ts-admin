import { AxiosHeaders } from 'axios'
import HZRequest from './request'
const BASE_URL = process.env.VUE_APP_BASE_URL
const hzRequest = new HZRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: new AxiosHeaders(),
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('请求成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应成功的拦截')
      return err
    }
  }
})
export default hzRequest
