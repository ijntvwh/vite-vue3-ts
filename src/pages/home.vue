<template>
  <div>home</div>
  <vue-icon />
  <n-button @click="navToUser"> 跳转用户页 </n-button>
</template>

<script setup lang="ts">
import router from '@/router'
import VueIcon from '@/svg/vue.svg?component'

function navToUser() {
  router.push('/user')
}
</script>
