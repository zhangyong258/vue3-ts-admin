import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HZRequestInterceptors, HZRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true

class HZRequest {
  instance: AxiosInstance
  interceptors?: HZRequestInterceptors
  showLoading: boolean // 是否显示loading
  loading?: LoadingInstance

  constructor(config: HZRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存axios基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    // 使用拦截器（从config中取出的拦截器）
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器：请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有实例都有的拦截器：请求拦截失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例都有的拦截器：响应成功拦截')
        // 移除loading
        this.loading?.close()
        return res.data
      },
      (err) => {
        // 移除loading
        this.loading?.close()
        switch (err.response.status) {
          case 401:
            console.log(`401错误~`)
            break
          case 404:
            console.log(`404错误~`)
            break
          case 500:
            console.log(`500错误~`)
            break
        }
        console.log('所有实例都有的拦截器：响应失败拦截')
        return err
      }
    )
  }

  request<T>(config: HZRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          // 设置为true,不影响下一次请求
          this.showLoading = DEFAULT_LOADING

          // 将结果返回出去
          resolve(res)
        })
        .catch((err) => {
          // 设置为true,不影响下一次请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T>(config: HZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T>(config: HZRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  // request(config: AxiosRequestConfig) {
  //   this.instance.request(config).then((res) => {
  //     console.log(res)
  //   })
  // }
}

export default HZRequest
