import { movieAPI } from '../api/movieAPI'
import { handleRequest } from './handleRequest'
import { toRefs } from '@vue/reactivity'

export default async function initMovies(showState) {
  // eslint-disable-next-line no-unused-vars
  const { movies, cityId, pageNum, pageSize, type, loading, finished } =
    toRefs(showState)

  const data = await movieAPI(
    cityId.value,
    pageNum.value,
    pageSize.value,
    type.value
  )
  if (!handleRequest(data)) return
  const {
    data: {
      data: { films },
    },
  } = data
  console.log('pageNum', pageNum.value, films)
  movies.value = [...movies.value, ...films]
  pageNum.value += 1
  loading.value = false
  if (films.length < 9) finished.value = true
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
