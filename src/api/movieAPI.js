import request from '@/api/request'

export const movieListAPI = function (cityId, pageNum, pageSize, type) {
  return request.get('/gateway', {
    params: {
      cityId: cityId,
      pageNum: pageNum,
      pageSize: pageSize,
      type: type,
      k: 3819095,
    },
    headers: {
      'X-Host': 'mall.film-ticket.film.list',
    },
  })
}

export const singleMovieAPI = function (filmId) {
  return request.get('/gateway', {
    params: {
      filmId: filmId,
      k: 3819095,
    },
    headers: {
      'X-Host': 'mall.film-ticket.film.info',
    },
  })
}
