import type { AuthData } from '@/store/auth'
import type { ResBaseData } from 'axios'
import { Api, hasCustomKey } from '@/api'
import { ACCESS_TOKEN_EXPIRED } from '@/api/interceptors/error'
import { authStore } from '@/store/auth'

const lock = ref(false)
export function refreshTokenAsync(res: ResBaseData): Promise<ResBaseData> {
  const store = authStore()
  const { refresh } = store
  if (res.data.code === ACCESS_TOKEN_EXPIRED && refresh) {
    if (lock.value) {
      return new Promise(resolve => {
        const stop = watchEffect(() => {
          if (lock.value) return
          resolve(Api(res.config))
          stop()
        })
      })
    }
    lock.value = true
    // todo refreshURL
    return Api.post<AuthData>('refreshURL', { refresh })
      .then(res => store.updateAuth(res))
      .finally(() => (lock.value = false))
      .then(() => Api(res.config))
  }
  return Promise.resolve(res)
}

export function extractResData(res: ResBaseData): Promise<ResBaseData> {
  return res.data?.success ? (hasCustomKey(res.config, 'complete') ? res.data : res.data.data) : Promise.reject(res)
}
