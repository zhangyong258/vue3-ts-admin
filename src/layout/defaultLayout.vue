<template>
  <div></div>
</template>

<script setup lang="ts">
import { store } from '@/store'
// import { localCache } from '@/utils/storage.ts'
let { username, age } = store.user()
let { menuWidth } = store.project()
console.log('🚀 ~ menuWidth:', menuWidth)
console.log('🚀 ~ userStore:', username, age)
</script>

<style scoped></style>
