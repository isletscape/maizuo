import request from '@/api/request'
export const cityAPI = function (k) {
  return request.get('/gateway', {
    params: {
      k: k.value,
    },
    headers: {
      'X-Host': 'mall.film-ticket.city.list',
    },
  })
}
