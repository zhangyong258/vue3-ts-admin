import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []
const files = require.context('@/router', false, /\.ts$/)
files.keys().forEach((key) => {
  if (key === './index.ts') return
  routes.push(...files(key).default)
})

const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/project/list'
  },
  {
    path: '/404',
    name: 'PageNotExist',
    component: () => import('@/views/404/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]
console.log('🚀 ~ routes:', routes.concat(defaultRoutes))

const router = createRouter({
  routes: routes.concat(defaultRoutes),
  history: createWebHashHistory()
})

export default router
