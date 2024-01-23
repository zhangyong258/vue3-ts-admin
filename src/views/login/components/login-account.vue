<template>
  <el-form
    ref="accountRef"
    :model="account"
    :rules="rules"
    status-icon
    label-position="top"
  >
    <el-form-item label="账号" prop="name">
      <el-input
        v-model.trim="account.name"
        size="large"
        placeholder="请输入账号"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model.trim="account.password"
        size="large"
        placeholder="请输入密码"
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface IAccount {
  name: string
  password: string
}
const accountRef = ref<FormInstance>()

const account = reactive<IAccount>({
  name: '',
  password: ''
})
const rules = reactive<FormRules<IAccount>>({
  name: [
    { required: true, message: '请输入账号信息', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '长度5-10个字符或数字',
      trigger: 'blur'
    }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }]
})
</script>

<style scoped></style>
