import request from '@/utils/request/request.js'

export const movieAPI = function (cityId, pageNum, pageSize, type) {
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
