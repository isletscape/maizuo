import request from '@/utils/request/request.js'

export const cinemaAPI = function (cityId, ticketFlag, k) {
  console.log('请求影院列表')
  return request.get('/gateway', {
    params: {
      cityId: cityId,
      ticketFlag: ticketFlag,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.cinema.list',
    },
  })
}
