import { Api, hasCustomKey } from '@/api'
import { ACCESS_TOKEN_EXPIRED } from '@/api/interceptors/error'
import { AuthData, authStore } from '@/store/auth'
import { ResBaseData } from 'axios'

const lock = ref(false)
export const refreshTokenAsync = (res: ResBaseData): Promise<ResBaseData> => {
  const store = authStore()
  const { refresh } = store
  if (res.data.code === ACCESS_TOKEN_EXPIRED && refresh) {
    if (lock.value)
      return new Promise(resolve => {
        const stop = watchEffect(() => {
          if (lock.value) return
          resolve(Api(res.config))
          stop()
        })
      })
    lock.value = true
    // todo refreshURL
    return Api.post<AuthData>('refreshURL', { refresh })
      .then(res => store.updateAuth(res))
      .finally(() => (lock.value = false))
      .then(() => Api(res.config))
  }
  return Promise.resolve(res)
}

export const extractResData = (res: ResBaseData): Promise<ResBaseData> =>
  res.data?.success ? (hasCustomKey(res.config, 'complete') ? res.data : res.data.data) : Promise.reject(res)
