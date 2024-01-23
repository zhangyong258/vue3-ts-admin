import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'

import router from './router'
import store from './store'

import 'normalize.css'
import './assets/css/index.less'

console.log(process.env)

const app = createApp(App)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
