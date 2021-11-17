import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      userInfo:
        JSON.parse(sessionStorage.getItem('userInfo')) ||
        JSON.parse(localStorage.getItem('userInfo')),
      currentMovie: {},
      currentCinema: {},
      currentCity: {
        name: '北京',
        cityId: 110100,
      },
      orderInfo: {},
    }
  },
  mutations: {
    updataUserInfo(state, userInfo) {
      state.userInfo = userInfo
      switch (userInfo.keepLogin) {
        case true: // 保持登录状态，本地存储
          sessionStorage.removeItem('userInfo')
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          break
        case false: // 不保持登录状态，浏览器存储
          localStorage.removeItem('userInfo')
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
          break
        default:
          break
      }
    },
    clearUserInfo(state) {
      sessionStorage.removeItem('userInfo')
      localStorage.removeItem('userInfo')
      state.userInfo = null
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
    saveOrderInfo(state, order) {
      state.orderInfo = order
    },
  },
})
export default store
