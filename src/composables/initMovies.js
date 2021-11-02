import { movieAPI } from '../api/movieAPI'
import { handleRequest } from './handleRequest'

export default async function initMovies(
  movies,
  cityID,
  pageNum,
  pageSize,
  type,
  loading,
  finished
) {
  const data = await movieAPI(cityID, pageNum, pageSize, type)
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
