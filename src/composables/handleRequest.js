import { Toast } from 'vant'
import { isEmpty } from '@/utils/isEmpty.js'
//0:请求成功，成功接收数据
//1:请求成功，但未接到数据
//2:请求出错
export const handleRequest = (data) => {
  if (data.status === 200) {
    if (data.data.status === 0) {
      console.log('获得数据')
      return 0
    } else {
      const errmessage = []
      for (const key in data.data) {
        // console.log('a', data.data[key])
        if (!isEmpty(data.data[key])) {
          errmessage.push(data.data[key])
        }
      }
      Toast(errmessage.join(','))
      return 1
    }
  } else {
    Toast('请求出错')
    return 2
  }
}
