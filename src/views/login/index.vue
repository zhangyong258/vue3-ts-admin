<template>
  <div class="login">
    <div class="position login-logo">
      <img src="@/assets/img/logo_company.png" alt="" />
    </div>
    <div class="position login-text">
      <img src="@/assets/img/login_text.png" alt="" />
    </div>
    <div class="login-module">
      <div class="title">
        <div class="panel-name">
          <span class="iconfont icon-zuoshuangjiantou1"></span>
          <span>{{ panelName }}</span>
        </div>
      </div>
      <LoginPanel />
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './components/login-panel.vue'
import { ref } from 'vue'
let panelName = ref('账号登录')
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
  .position {
    position: absolute;
  }
  &-logo {
    width: 9.25rem;
    height: 1.875rem;
    left: 3rem;
    top: 3rem;
    img {
      width: 100%;
    }
  }
  &-text {
    width: 20rem;
    height: 9.875rem;
    left: 9.25rem;
    top: 48%;
    transform: translateY(-50%);
    img {
      width: 100%;
    }
  }
  &-module {
    position: absolute;
    right: 9.25rem;
    top: 50%;
    width: 37.5rem;
    height: 520px;
    background: #fff;
    padding: 2.5rem;
    border-radius: 8px;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.84);
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.16);
    backdrop-filter: blur(48px);
    .title {
      font-size: 32px;
      font-weight: 800;
      .panel-name {
        display: flex;
        align-items: center;
        span {
          &:first-child {
            margin-right: 0.75rem;
            font-size: 2rem;
          }
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
