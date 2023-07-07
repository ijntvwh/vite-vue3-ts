<template>
  <div>login</div>
  <a-button @click="loginAction"> 登录 </a-button>
</template>

<script setup lang="ts">
import router from '@/router'
import { authStore } from '@/store/auth'
const route = useRoute()

function loginAction() {
  const store = authStore()
  store.updateAuth({ access: 'access', refresh: 'refresh' })
  console.log('route', route.redirectedFrom)
  if (route.redirectedFrom) {
    router.replace(route.redirectedFrom)
    return
  }
  router.back()
}
</script>
