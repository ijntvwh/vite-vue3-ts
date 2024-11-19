import { authStore } from '@/store/auth'
import { createRouter, createWebHashHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

export const UNAUTHORIZED_PATH = '/login'
export const HOME_PATH = '/home'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', redirect: HOME_PATH }, ...routes],
})
router.beforeEach((to, from, next) => {
  const authenticated = authStore().access
  if (to.meta.auth || to.matched.some(r => r.meta.auth)) {
    if (authenticated) return next()
    next(UNAUTHORIZED_PATH)
  } else {
    if (!authenticated) return next()
    if (from.meta.auth) return next(false)
    to.path === HOME_PATH ? next() : next(HOME_PATH)
  }
})

export const toLogin = () => router.replace(UNAUTHORIZED_PATH)
if (import.meta.hot) handleHotUpdate(router)

export default router
