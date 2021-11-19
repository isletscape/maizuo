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

export default request
