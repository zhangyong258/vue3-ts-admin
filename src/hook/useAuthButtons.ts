import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '@/store'

/**
 * @description 页面按钮权限
 * */
export const useAuthButtons = () => {
  const route = useRoute()
  const authStore = store.userStore()
  const authButtons = authStore.authButtonListGet[route.name as string] || []

  const BUTTONS = computed(() => {
    const currentPageAuthButton: { [key: string]: boolean } = {}
    authButtons.forEach(
      (item: string | number) => (currentPageAuthButton[item] = true)
    )
    return currentPageAuthButton
  })

  return {
    BUTTONS
  }
}
