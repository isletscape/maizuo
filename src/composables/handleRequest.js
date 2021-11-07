import { Toast } from 'vant'

//0:请求成功，成功接收数据
//1:请求成功，但未接到数据
//2:请求出错
export const handleRequest = (data) => {
  if (data.status === 200) {
    if (data.data.status === 0) {
      console.log('获得数据')
      return 0
    } else {
      console.log('信息：', data.data.msg, '状态码：', data.data.status)
      return 1
    }
  } else {
    Toast('请求出错')
    return 2
  }
}
