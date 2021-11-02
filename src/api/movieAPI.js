//发送请求
import request from '@/utils/request/request.js'

export const movieAPI = function (cityId, pageNum, pageSize, type) {
  return request.get('/gateway', {
    params: {
      cityId: cityId.value,
      pageNum: pageNum.value,
      pageSize: pageSize.value,
      type: type.value,
      k: 9707656,
    },
  })
}
