//状态共享
import { createStore } from 'vuex'

const Store = createStore({
  state() {
    return {
      currentCity: {
        //默认城市
        name: '北京',
        cityId: 110100,
      },
    }
  },
  mutations: {
    updateCurrentCity(state, newCity) {
      state.currentCity = newCity
    },
  },
})
export default Store
