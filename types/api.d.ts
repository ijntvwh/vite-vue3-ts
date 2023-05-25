/* eslint-disable @typescript-eslint/no-explicit-any */
import 'axios'

declare module 'axios' {
  type ReqCustomKey = 'silent' | 'anonymous' | 'complete'
  type ResData<T> = { success: boolean; code: string; msg: string; data: T }
  type ReqConfig<D = any> = AxiosRequestConfig<D> & { custom?: ReqCustomKey[] }
  type ResBaseData<T = any> = AxiosResponse<ResData<T>>
  export interface AxiosInstance {
    interceptors: {
      request: AxiosInterceptorManager<ReqConfig>
      response: AxiosInterceptorManager<ResBaseData>
    }
    request<T, D = any>(config: ReqConfig<D>): Promise<T>
    get<T, D = any>(url: string, config?: ReqConfig<D>): Promise<T>
    delete<T, D = any>(url: string, config?: ReqConfig<D>): Promise<T>
    post<T, D = any>(url: string, data?: D, config?: ReqConfig<D>): Promise<T>
    put<T, D = any>(url: string, data?: D, config?: ReqConfig<D>): Promise<T>
  }
}
