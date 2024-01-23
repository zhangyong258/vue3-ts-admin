import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface HZRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HZRequestConfig<T = AxiosResponse>
  extends InternalAxiosRequestConfig {
  interceptors?: HZRequestInterceptors<T>
  showLoading?: boolean
}
