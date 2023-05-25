<template>
  <div>home</div>
  <a-button @click="navToUser"> 跳转用户页 </a-button>
</template>

<script setup lang="ts">
import router from '@/router'

function navToUser() {
  router.push('/user')
}
</script>
