import { defineStore } from 'pinia'
const projectStore = defineStore('project', {
  state: () => {
    return {
      menuWidth: 72,
      activeMenu: 'overview'
    }
  },
  getters: {},
  actions: {},
  persist: true
})

export default projectStore
