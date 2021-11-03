import request from '@/utils/request/request.js'

export const cityAPI = function (k) {
  console.log('请求城市列表')
  return request.get('/gateway', {
    params: {
      k: k.value,
    },
    headers: {
      'X-Host': 'mall.film-ticket.city.list',
    },
  })
}
