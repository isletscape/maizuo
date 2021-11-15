import { createStore } from 'vuex'

const Store = createStore({
  state() {
    return {
      isLogin: false,
      currentCity: {
        //默认城市
        name: '北京',
        cityId: 110100,
      },
      currentMovie: {},
      currentCinema: {},
    }
  },
  mutations: {
    updateLoginStatus(state, isLogin) {
      state.isLogin = isLogin
    },
    updateCurrentCity(state, newCity) {
      state.currentCity = newCity
    },
    updateCurrentMovie(state, newMovie) {
      state.currentMovie = newMovie
    },
    updateCurrentCinema(state, newCinema) {
      state.currentCinema = newCinema
    },
  },
})
export default Store
