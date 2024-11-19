import type { ResBaseData } from 'axios'
import { hasCustomKey } from '@/api'
import { toLogin } from '@/router'
import { authStore } from '@/store/auth'
import { showToast } from '@/utils'

// todo ERROR code
export const ACCESS_TOKEN_EXPIRED = '003001'
export const ERROR_OVERWRITE: Record<string, string> = {
  // '003000': '不合法的Token',
}

export function toastError(err: Error | ResBaseData) {
  const isError = err instanceof Error
  if (isError || !hasCustomKey(err.config, 'silent')) {
    const title = isError ? err.message : (ERROR_OVERWRITE[err.data?.code] ?? (err.data?.msg || '系统错误'))
    setTimeout(() => showToast(title), 100)
  }
  return Promise.reject(err)
}

export function navLogin(err: Error | ResBaseData) {
  const errPromise = Promise.reject(err)
  if (err instanceof Error) return errPromise
  if (err.data?.code?.startsWith('003')) {
    // updateTokenFunc()
    const store = authStore()
    store.updateAuth()
    if (!hasCustomKey(err.config, 'anonymous')) toLogin()
  }
  return errPromise
}
