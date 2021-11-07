import { cityAPI } from '@/api/cityAPI.js'
import { handleRequest } from './handleRequest'

export default async function initCitys(citys, k) {
  if (localStorage.getItem('citys'))
    return (citys.value = JSON.parse(localStorage.getItem('citys')))

  const data = await cityAPI(k)

  switch (handleRequest(data)) {
    case 0:
      break
    case 1:
    case 2:
      return
    default:
      break
  }
  const {
    data: {
      data: { cities },
    },
  } = data

  //按首字母序列化城市列表
  const letterArr = []
  const newCities = []
  for (let code = 65; code < 91; code++) {
    letterArr.push(String.fromCharCode(code))
  }
  letterArr.forEach((letter) => {
    const list = cities.filter(
      (item) => item.pinyin.substring(0, 1).toUpperCase() === letter
    )
    if (list.length > 0) {
      newCities.push({
        type: letter,
        list: list,
      })
    }
  })

  localStorage.setItem('citys', JSON.stringify(newCities))
  citys.value = newCities
  console.log('城市列表初始化', citys.value)
}
