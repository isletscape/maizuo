import axios from 'axios'
// import { Toast } from 'vant'

const request = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 5000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"16357488174324233203154945","bc":"110100"}',
    // 'X-Host': 'mall.film-ticket.film.list',
  },
})
// // 请求拦截
// request.interceptors.request.use(
//   (config) => {
//     Toast.loading({
//       message: '加载中...',
//       forbidClick: true
//     })
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

// // 响应拦截
// request.interceptors.response.use(
//   (res) => {
//     Toast.clear()
//     return res.data
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )
export default request
