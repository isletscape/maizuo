import {
  cinemaListAPI,
  cinemaMovieListAPI,
  movieHallListAPI,
} from '@/api/cinemaAPI.js'
import { handleRequest } from './handleRequest'

export { initCinemasList, initCinemaMovieList, initMovieHallList }
//影院列表数据
async function initCinemasList(cinemasList, regionList, cityId, ticketFlag, k) {
  // if (localStorage.getItem('cinemas')) {
  //   cinemasList.value = JSON.parse(localStorage.getItem('cinemas'))
  // } else {
  const data = await cinemaListAPI(cityId, ticketFlag, k)

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
//影院电影数据
async function initCinemaMovieList(cinemaMovieList, cinemaId, showDate, k) {
  const data = await cinemaMovieListAPI(cinemaId, showDate, k)

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
      //cinemaExtendList
      data: { films },
    },
  } = data
  cinemaMovieList.value = films
}
//影厅数据
async function initMovieHallList(movieHallList, filmId, cinemaId, date, k) {
  const data = await movieHallListAPI(filmId, cinemaId, date, k)
  console.log('movie-halls', data)
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
      //cinemaExtendList
      data: { schedules },
    },
  } = data
  console.log(data, schedules)
  movieHallList.value = schedules
}
