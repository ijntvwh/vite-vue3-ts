import { authStore } from '@/store/auth'
import { ReqConfig } from 'axios'

export const injectToken = (config: ReqConfig): Promise<ReqConfig> => {
  const token = authStore().access
  token && (config.headers = { ...config.headers, Authorization: `Bearer ${token}` })
  return Promise.resolve(config)
}

export const fillEmptyBody = (config: ReqConfig): Promise<ReqConfig> => {
  if (!config.data) config.data = {}
  return Promise.resolve(config)
}
