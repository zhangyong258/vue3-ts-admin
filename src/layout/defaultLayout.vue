<template>
  <div></div>
</template>

<script setup lang="ts">
import { store } from '@/store'
// import { localCache } from '@/utils/storage.ts'
let { username, age } = store.user()
let { projectName } = store.project()
console.log('🚀 ~ projectName:', projectName)
console.log('🚀 ~ userStore:', username, age)
</script>

<style scoped></style>
