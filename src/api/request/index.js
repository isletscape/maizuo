import axios from 'axios'

const request = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 5000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"16357488174324233203154945","bc":"110100"}',
    // 'X-Host': 'mall.film-ticket.film.list',
  },
})

export default request
