<template>
  <el-form
    ref="phoneRef"
    :model="phoneFrom"
    :rules="rules"
    status-icon
    label-position="top"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input
        v-model.trim="phoneFrom.phone"
        size="large"
        placeholder="请输入手机号码"
      />
    </el-form-item>
    <el-form-item label="验证码" prop="authCode" class="custom-form-item">
      <el-input
        v-model.trim="phoneFrom.authCode"
        size="large"
        placeholder="请输入验证码"
      />
      <AuthCode />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import AuthCode from './auth-code.vue'

interface IPhoneType {
  phone: string
  authCode: string
}
const phoneRef = ref<FormInstance>()

const phoneFrom = reactive<IPhoneType>({
  phone: '',
  authCode: ''
})
const rules = reactive<FormRules<IPhoneType>>({
  phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  authCode: [{ required: true, message: '请输入验证码', trigger: 'change' }]
})
</script>

<style scoped lang="less">
.custom-form-item {
  :deep(.el-form-item__content) {
    display: flex;
    .el-input {
      flex: 1;
      margin-right: 10px;
    }
  }
}
</style>
