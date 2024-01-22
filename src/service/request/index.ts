import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HZRequestInterceptors, HZRequestConfig } from './type'

class HZRequest {
  instance: AxiosInstance
  interceptors?: HZRequestInterceptors

  constructor(config: HZRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config)
  }
}

export default HZRequest
