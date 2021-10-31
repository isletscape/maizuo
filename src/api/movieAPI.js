//发送请求
import request from '@/utils/request/request.js'

export const movieAPI = function (cityId, pageNum, pageSize) {
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
