<template>
  <div class="login-panel">
    <el-tabs stretch type="border-card"
      ><!--  type="border-card" -->
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="tip-line">
      <el-checkbox v-model="remember" label="记住密码" size="small" />
      <div class="forget">忘记密码</div>
    </div>
    <el-button class="sign-in" type="primary" size="large">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account'
import LoginPhone from './login-phone'

const remember = ref(true)
</script>

<style scoped lang="less">
.login-panel {
  margin-top: 24px;
  min-width: 400px;
  .custom-tabs-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    .el-icon {
      margin-right: 5px;
    }
  }
  .tip-line {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .forget {
      font-size: 12px;
      &:hover {
        cursor: pointer;
        color: var(--el-color-primary);
      }
    }
  }
  .sign-in {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
