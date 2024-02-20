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
        name: 'ProjectList'
      },
      {
        path: 'info:id?',
        name: 'ProjectInfo',
        children: []
      }
    ]
  }
]
