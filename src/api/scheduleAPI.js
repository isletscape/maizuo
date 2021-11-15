import request from '@/api/request'

export { seatingChartAPI, scheduleAPI }

// 影院
const scheduleAPI = function (scheduleId, k) {
  return request.get('/gateway', {
    params: {
      scheduleId: scheduleId,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.schedule.info',
    },
  })
}
// 座位
const seatingChartAPI = function (scheduleId, k) {
  return request.get('/gateway', {
    params: {
      scheduleId: scheduleId,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.seat.list',
    },
  })
}
// 影厅信息
