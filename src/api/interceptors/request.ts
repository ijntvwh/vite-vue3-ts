import type { ReqConfig } from 'axios'
import { authStore } from '@/store/auth'

export function injectToken(config: ReqConfig): Promise<ReqConfig> {
  const token = authStore().access
  token && (config.headers = { ...config.headers, Authorization: `Bearer ${token}` })
  return Promise.resolve(config)
}

export function fillEmptyBody(config: ReqConfig): Promise<ReqConfig> {
  if (!config.data) config.data = {}
  return Promise.resolve(config)
}
