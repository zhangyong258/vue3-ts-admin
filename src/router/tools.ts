import Layout from '@/layout/defaultLayout.vue'
export default [
  {
    path: '/tools',
    name: 'Tools',
    component: Layout,
    children: [
      {
        path: 'carbon-emission',
        name: 'ToolsCarbonEmission'
      },
      {
        path: 'carbon',
        name: 'Carbon'
      }
    ]
  }
]
