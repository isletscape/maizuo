import request from '@/api/request'

export { seatingChartAPI, scheduleAPI }

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
