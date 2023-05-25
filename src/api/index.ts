import { navLogin, toastError } from '@/api/interceptors/error'
import { fillEmptyBody, injectToken } from '@/api/interceptors/request'
import { extractResData } from '@/api/interceptors/response'

import axios, { AxiosResponse, ReqConfig, ReqCustomKey, ResBaseData } from 'axios'

const instance = axios.create({ baseURL: import.meta.env.VITE_API_HOST })
const reqChain: ((_config: ReqConfig) => Promise<ReqConfig>)[] = [fillEmptyBody, injectToken]
const resChain: ((_res: ResBaseData) => Promise<ResBaseData>)[] = [extractResData]
const errChain: ((_err: Error | AxiosResponse) => Promise<never>)[] = [navLogin, toastError]

const onRejected = (err: Error | AxiosResponse) => errChain.reduce((pre, cur) => pre.catch(cur), Promise.reject(err))

instance.interceptors.request.use(
  config => reqChain.reduce((pre, cur) => pre.then(cur), Promise.resolve(config)).catch(onRejected),
  onRejected
)

instance.interceptors.response.use(
  res => resChain.reduce((pre, cur) => pre.then(cur), Promise.resolve(res)).catch(onRejected),
  onRejected
)

export const Api = instance

export const hasCustomKey = (config: ReqConfig | null, key: ReqCustomKey): boolean | undefined => {
  return config?.custom?.includes(key)
}
