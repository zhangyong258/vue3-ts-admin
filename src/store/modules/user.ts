import { defineStore } from 'pinia'
const userStore = defineStore('user', {
  state: () => {
    return {
      username: 'hezhu',
      age: 1
    }
  },
  getters: {},
  actions: {},

  persist: true // 将 persist 选项设置为 true，整个 Store 将使用默认持久化配置保存。

  /**
   *
   *  key：存储名称。
   *  storage：存储方式。
   *  path：用于指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state。
   */
  // persist: {
  //   key: 'userStore', // 存储名称
  //   storage: sessionStorage, // 存储方式
  //   paths: ['username', 'age'] // 指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
  // }
})

export default userStore
