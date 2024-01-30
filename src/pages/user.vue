<template>
  <div>user</div>
  <n-button @click="logout"> 退出登录 </n-button>
</template>
<script lang="ts" setup>
import router from '@/router'
import { authStore } from '@/store/auth'

function logout() {
  const store = authStore()
  store.updateAuth()
  router.push('/')
}
</script>
<route lang="json">
{
  "meta": {
    "auth": true
  }
}
</route>
