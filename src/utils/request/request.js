//请求基本配置
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 5000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"1596502176387264316178433","bc":"310100"}',
    // 'X-Host': 'mall.film-ticket.film.list',
  },
})

export default request
