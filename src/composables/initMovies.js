import { movieListAPI, singleMovieAPI } from '../api/movieAPI'
import { handleRequest } from './handleRequest'
import { toRefs } from '@vue/reactivity'

export { initMovieList, initSingleMovie }

//请求电影列表
async function initMovieList(params) {
  // eslint-disable-next-line no-unused-vars
  const { movies, cityId, pageNum, pageSize, type, loading, finished } =
    toRefs(params)
  if (sessionStorage.getItem('someMovie')) {
    loading.value = false
    finished.value = true
    movies.value = JSON.parse(sessionStorage.getItem('someMovie'))
  } else {
    const data = await movieListAPI(
      cityId.value,
      pageNum.value,
      pageSize.value,
      type.value
    )
    switch (handleRequest(data)) {
      case 0:
        break
      case 1:
      case 2:
        return
      default:
        break
    }
    const {
      data: {
        data: { films },
      },
    } = data
    movies.value = [...movies.value, ...films]
    pageNum.value += 1
    loading.value = false
    if (films.length < 9) finished.value = true
  }

  sessionStorage.setItem('someMovie', JSON.stringify(movies.value))
}

//请求单个电影
async function initSingleMovie(movie, filmId) {
  const data = await singleMovieAPI(filmId)
  switch (handleRequest(data)) {
    case 0:
      break
    case 1:
    case 2:
      return
    default:
      break
  }
  const {
    data: {
      data: { film },
    },
  } = data

  movie.value = film
  movie.value.premiereAt = new Date(parseInt(movie.value.premiereAt) * 1000)
    .toLocaleString()
    .replace(/:\d{1,2}$/, ' ')
    .split(' ')[0]
  movie.value.actors.map((item) => {
    item.role = item.role.split(' ')[0]
  })
}

// export default async function initMovies(showState) {
//   const { movies, cityId, pageNum, pageSize, type, loading, finished } =
//     showState

//   const data = await movieAPI(cityId, pageNum.value, pageSize, type)
//   if (!handleRequest(data)) return
//   const {
//     data: {
//       data: { films },
//     },
//   } = data
//   console.log('pageNum', pageNum.value, films)
//   movies.value = [...movies.value, ...films]
//   pageNum.value += 1
//   loading.value = false
//   if (films.length < 9) finished.value = true
// }
