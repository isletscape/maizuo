import request from '@/api/request'

export { bannerListAPI, movieListAPI, singleMovieAPI }

const bannerListAPI = function (type, cityId, k) {
  return request.get('/gateway', {
    params: {
      type: type,
      cityId: cityId,
      k: k,
    },
    headers: {
      'X-Host': 'mall.cfg.common-banner',
    },
  })
}

const movieListAPI = function (cityId, pageNum, pageSize, type) {
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

const singleMovieAPI = function (filmId) {
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
