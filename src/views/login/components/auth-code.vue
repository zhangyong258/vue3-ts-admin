<template>
  <el-button
    class="auth-code"
    type="primary"
    size="large"
    :disabled="disableSend"
    @click="handleSend"
  >
    {{ sendBtnText }}
  </el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const sendBtnText = ref('获取验证码')
const disableSend = ref(false)
let timer: number | NodeJS.Timeout = 0
const countDown = ref(60)

const handleSend = () => {
  disableSend.value = true
  sendBtnText.value = `重新发送(${countDown.value}s)`

  clearInterval(Number(timer))
  timer = setInterval(() => {
    countDown.value--
    sendBtnText.value = `重新发送(${countDown.value}s)`

    if (countDown.value === 0) {
      disableSend.value = false
      sendBtnText.value = '获取验证码'
      clearInterval(Number(timer))
      countDown.value = 60
    }
  }, 1000)
}
</script>

<style scoped lang="less">
.auth-code {
  min-width: 120px;
}
</style>
