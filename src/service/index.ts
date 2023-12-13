import HZRequest from './request'
const BASE_URL = process.env.VUE_APP_BASE_URL
const hzRequest = new HZRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default hzRequest
