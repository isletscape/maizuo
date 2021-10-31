import { movieAPI } from '../api/movieAPI'
import { handleRequest } from './handleRequest'

export default async function initMovies(
  movies,
  cityID,
  pageNum,
  pageSize,
  loading,
  finished
) {
  const data = await movieAPI(cityID.value, pageNum.value, pageSize.value)
  if (!handleRequest(data)) return
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
