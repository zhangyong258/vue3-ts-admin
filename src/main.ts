import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'

import router from './router'
import pinia from './store'

import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)
app.use(globalRegister)

app.use(router)
app.use(pinia)
app.mount('#app')

console.log('🚀 ~ process:', process.env)
