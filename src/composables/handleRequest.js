//请求结果处理
export const handleRequest = (data) => {
  var flag = true
  if (data.status === 200) {
    if (data.data.status === 0) {
      console.log('获得数据')
    } else {
      flag = false
      console.log(data.data.msg)
    }
  } else {
    flag = false
    console.log('请求失败')
  }
  return flag
}
