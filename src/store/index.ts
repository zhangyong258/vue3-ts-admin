import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'vuex store'
    }
  }
})

export default store
