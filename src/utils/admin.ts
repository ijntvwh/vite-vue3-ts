import { RouteLocationNormalizedLoaded } from 'vue-router/auto'

export const ADMIN_PREFIX = '/admin/'
export const ADD_SUFFIX = 'add'
export const ID_REGEX = /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12,}$/
export const adminPath = (route: RouteLocationNormalizedLoaded, withPrefix = false) => {
  const s = withPrefix ? route.path : route.path.substring(ADMIN_PREFIX.length)
  return s.replace(/\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12,}$/, '').replace(/\/add$/, '')
}

export const PAGE_SIZE = 1

export type IPage = { pageSize: number; pageNum: number }
export type PageReq<T> = Partial<T> & { page: IPage }
export type PageRes = IPage & { total: number; currentCount: number }

export type IdData = { id: string }
