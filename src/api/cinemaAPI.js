import request from '@/utils/request/request.js'

export const cinemaAPI = function (filmId, cityId, k) {
  console.log('请求影院列表')
  return request.get('/gateway', {
    params: {
      filmId: filmId,
      cityId: cityId,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.cinema.film-show-cinema',
    },
  })
}
