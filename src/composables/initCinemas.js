import { cinemaAPI } from '@/api/cinemaAPI.js'
import { handleRequest } from './handleRequest'

export default async function initCinemas(
  cinemasList,
  regionList,
  cityId,
  ticketFlag,
  k
) {
  // if (localStorage.getItem('cinemas')) {
  //   cinemasList.value = JSON.parse(localStorage.getItem('cinemas'))
  // } else {
  const data = await cinemaAPI(cityId, ticketFlag, k)
  //请求出错，处理错误并return
  if (!handleRequest(data)) return
  const {
    data: {
      //cinemaExtendList
      data: { cinemas },
    },
  } = data

  cinemasList.value = cinemas

  cinemasList.value.map((item) => {
    const price =
      String(item.lowPrice).slice(0, 2) + '.' + String(item.lowPrice).slice(2)
    const distance = String(item.Distance).slice(
      0,
      String(item.Distance).indexOf('.') + 2
    )
    item.lowPrice = price
    item.Distance = distance
  })

  const aaa = []
  cinemasList.value.forEach((item) => {
    aaa.push(item.districtName)
  })
  regionList.value = Array.from(new Set(aaa))

  //   localStorage.setItem('cinemas', JSON.stringify(cinemasList.value))
  // }
}
