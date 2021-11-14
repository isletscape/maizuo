import { createStore } from 'vuex'

const Store = createStore({
  state() {
    return {
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
