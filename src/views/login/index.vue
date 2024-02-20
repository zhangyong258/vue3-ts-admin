<template>
  <div class="login">
    <div class="login-module">
      <div class="title">上海禾筑数字科技</div>
      <LoginPanel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './components/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login_bg.png') no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  &-module {
    position: absolute;
    right: 10%;
    top: 25%;
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    .title {
      font-size: 32px;
      font-weight: 800;
    }
  }
}
</style>
