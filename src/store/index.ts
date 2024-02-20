import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const storeFiles = require.context('./modules', true, /\.ts$/)
const store = storeFiles.keys().reduce((pre: any, cur: string) => {
  const storeName = cur.replace(/^\.\/(.*)\.\w+$/, '$1')
  pre[storeName] = storeFiles(cur).default
  return pre
}, {})

console.log('🚀 ~ store list :', store)

export { storeToRefs } from 'pinia'
export default pinia
export { store }
