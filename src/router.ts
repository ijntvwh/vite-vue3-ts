import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { authStore } from './store/auth'

export const UNAUTHORIZED_PATH = '/login'
export const HOME_PATH = '/home'

const router = createRouter({
  history: createWebHashHistory(),
  extendRoutes: routes => {
    // const adminRoute = routes.find(r => r.path === '/admin')
    // if (adminRoute) {
    //   adminRoute.meta ??= {}
    //   adminRoute.meta.auth = true
    // }
    routes.push({ path: '/', redirect: '/home' })
    return routes
  },
})
router.beforeEach((to, from, next) => {
  const authenticated = authStore().access
  // console.log('route to from', to.path, from.path)
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

export default router
