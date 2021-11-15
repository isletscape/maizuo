import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLogin: false,
      currentMovie: {},
      currentCinema: {},
      currentCity: {
        name: '北京',
        cityId: 110100,
      },
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
export default store
