import { bannerListAPI, movieListAPI, singleMovieAPI } from '../api/movieAPI'
import { toRefs } from '@vue/reactivity'

export { initBannerList, initMovieList, initSingleMovie }

// 轮播图banner
async function initBannerList(bannerList, type, cityId, k) {
  bannerList.value = await bannerListAPI(type, cityId, k)
}

//请求电影列表
async function initMovieList(params) {
  // eslint-disable-next-line no-unused-vars
  const { movies, cityId, pageNum, pageSize, type, loading, finished } =
    toRefs(params)
  // if (sessionStorage.getItem('someMovie')) {
  //   loading.value = false
  //   finished.value = true
  //   movies.value = JSON.parse(sessionStorage.getItem('someMovie'))
  // } else {
  const { films } = await movieListAPI(
    cityId.value,
    pageNum.value,
    pageSize.value,
    type.value
  )
  movies.value = [...movies.value, ...films]
  pageNum.value += 1
  loading.value = false
  if (films.length < 9) finished.value = true
  // }
  // sessionStorage.setItem('someMovie', JSON.stringify(movies.value))
}

//请求单个电影
async function initSingleMovie(movie, filmId) {
  const { film } = await singleMovieAPI(filmId)
  movie.value = film
  movie.value.premiereAt = new Date(parseInt(movie.value.premiereAt) * 1000)
    .toLocaleString()
    .replace(/:\d{1,2}$/, ' ')
    .split(' ')[0]
  movie.value.actors.map((item) => {
    item.role = item.role.split(' ')[0]
  })
}
