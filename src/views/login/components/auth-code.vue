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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sendBtnText: '获取验证码',
      disableSend: false,
      timer: 0,
      countDown: 60
    }
  },
  methods: {
    handleSend() {
      this.disableSend = true
      this.sendBtnText = `重新发送(${this.countDown}s)`

      this.timer = setInterval(() => {
        this.countDown--
        this.sendBtnText = `重新发送(${this.countDown}s)`

        if (this.countDown === 0) {
          this.disableSend = false
          this.sendBtnText = `获取验证码`
          clearInterval(this.timer)
          this.countDown = 60
        }
      }, 1000)
    }
  }
})
</script>

<style scoped lang="less">
.auth-code {
  min-width: 120px;
}
</style>
