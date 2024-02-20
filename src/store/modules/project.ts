import { defineStore } from 'pinia'
const projectStore = defineStore('project', {
  state: () => {
    return {
      projectName: '禾筑'
    }
  },
  getters: {},
  actions: {},
  persist: true
})

export default projectStore
