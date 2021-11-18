import { cityAPI } from '@/api/cityAPI.js'

export { initCitys }

async function initCitys(citys, k) {
  if (localStorage.getItem('citys'))
    return (citys.value = JSON.parse(localStorage.getItem('citys')))

  const { cities } = await cityAPI(k)
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
}
