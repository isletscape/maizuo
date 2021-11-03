import request from '@/utils/request/request.js'

export const movieAPI = function (cityId, pageNum, pageSize, type) {
  return request.get('/gateway', {
    params: {
      cityId: cityId.value,
      pageNum: pageNum.value,
      pageSize: pageSize.value,
      type: type.value,
      k: 3819095,
    },
    headers: {
      'X-Host': 'mall.film-ticket.film.list',
    },
  })
}
