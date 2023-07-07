import { defineStore } from 'pinia'

const initData = { access: '', refresh: '' }
export type AuthData = typeof initData

export const authStore = defineStore('auth', {
  state: () => ({ ...initData }),
  actions: {
    updateAuth(result?: AuthData) {
      this.access = result?.access ?? initData.access
      this.refresh = result?.refresh ?? initData.refresh
    },
  },
  persist: true,
})
