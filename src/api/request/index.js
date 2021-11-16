import axios from 'axios'
import { Toast } from 'vant'
import { isEmpty } from '@/utils/isEmpty.js'

const request = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 5000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"16357488174324233203154945","bc":"110100"}',
    // 'X-Host': 'mall.film-ticket.film.list',
  },
})
// 请求拦截
request.interceptors.request.use(
  (config) => {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
    })
    return config
  },
  (err) => {
    Toast(err)
    console.log('请求拦截err', err)
  }
)

// 响应拦截
request.interceptors.response.use(
  (res) => {
    Toast.clear()
    return handleResponseData(res)
  },
  (err) => {
    Toast(err)
    console.log('响应拦截err', err)
  }
)

const handleResponseData = (res) => {
  if (res.data.status === 0) {
    return res.data.data
  } else {
    const errmessage = []
    for (const key in res.data) {
      if (!isEmpty(res.data[key])) {
        errmessage.push(res.data[key])
      }
    }
    Toast(errmessage.join(','))
    return null
  }
}

// const handleRequest = (data) => {
//   if (data.status === 200) {
//     if (data.data.status === 0) {
//       console.log('获得数据')
//       return 0
//     } else {
//       const errmessage = []
//       for (const key in data.data) {
//         // console.log('a', data.data[key])
//         if (!isEmpty(data.data[key])) {
//           errmessage.push(data.data[key])
//         }
//       }
//       Toast(errmessage.join(','))
//       return 1
//     }
//   } else {
//     Toast('请求出错')
//     return 2
//   }
// }

export default request
