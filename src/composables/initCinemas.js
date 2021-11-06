import { cinemaAPI } from '@/api/cinemaAPI.js'
import { handleRequest } from './handleRequest'

export default async function initCinemas(cinemasList, filmId, cityId, k) {
  const data = await cinemaAPI(filmId, cityId, k)
  //请求出错，处理错误并return
  if (!handleRequest(data)) return
  const {
    data: {
      //cinemaExtendList
      data: { showCinemas },
    },
  } = data
  cinemasList.value = showCinemas
}
