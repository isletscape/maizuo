import request from '@/utils/request.js'

export const getMovie = function (cityId, pageNum, pageSize) {
  return request.get('/gateway', {
    params: {
      cityId: cityId,
      pageNum: pageNum,
      pageSize: pageSize,
      type: 1,
      k: 3819095,
    },
  })
}
