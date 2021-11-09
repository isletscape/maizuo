import {
  allCinemaAPI,
  ticketsCinemaAPI,
  cinemaListAPI,
  cinemaMovieListAPI,
  movieHallListAPI,
} from '@/api/cinemaAPI.js'
import { handleRequest } from './handleRequest'

export {
  initAllCinemaList,
  initTicketsCinemaList,
  initCinemasList,
  initCinemaMovieList,
  initMovieHallList,
}

//全部影院
async function initAllCinemaList(cinemasList, cityId, ticketFlag, k) {
  const data = await allCinemaAPI(cityId, ticketFlag, k)
  console.log('all-cinema', data)
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
}
//购票页影院数据
async function initTicketsCinemaList(filmId, cityId, k) {
  const data = await ticketsCinemaAPI(filmId, cityId, k)
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
  cinemas
}

//影院列表数据,地区列表数据
async function initCinemasList(
  allCinemaList,
  regionCinemaList,
  regionList,
  cityId,
  ticketFlag,
  k
) {
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

  allCinemaList.value = cinemas
  allCinemaList.value.map((item) => {
    const price =
      String(item.lowPrice).slice(0, 2) + '.' + String(item.lowPrice).slice(2)
    const distance = String(item.Distance).slice(
      0,
      String(item.Distance).indexOf('.') + 2
    )
    item.lowPrice = price
    item.Distance = distance
  })

  regionCinemaList.value = allCinemaList.value

  const aaa = []
  allCinemaList.value.forEach((item) => {
    aaa.push(item.districtName)
  })
  regionList.value = Array.from(new Set(aaa))
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
      data: { schedules },
    },
  } = data
  movieHallList.value = schedules
}
