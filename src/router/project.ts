import Layout from '@/layout/defaultLayout.vue'
export default [
  {
    path: '/project',
    name: 'Project',
    redirect: '/project/list',
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'ProjectList',
        component: () => import('@/views/project/index.vue')
      },
      {
        path: 'info:id?',
        name: 'ProjectInfo',
        children: []
      }
    ]
  }
]
