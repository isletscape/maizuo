import {
  allCinemaAPI,
  cinemaAPI,
  ticketsCinemaAPI,
  cinemaListAPI,
  cinemaMovieListAPI,
  movieHallListAPI,
} from '@/api/cinemaAPI.js'

export {
  initAllCinemaList,
  initCinema,
  initTicketsCinemaList,
  initCinemasList,
  initCinemaMovieList,
  initMovieHallList,
}

//全部影院
async function initAllCinemaList(cinemasList, cityId, ticketFlag, k) {
  const data = await allCinemaAPI(cityId, ticketFlag, k)
  cinemasList.value = data ? data.cinemas : null
}

// 影院信息
async function initCinema(cinemaObj, cinemaId, k) {
  const data = await cinemaAPI(cinemaId, k)
  cinemaObj.value = data ? data.cinema : null
}
// 购票页影院数据
async function initTicketsCinemaList(cinameList, filmId, cityId, k) {
  const { cinemas } = await ticketsCinemaAPI(filmId, cityId, k)
  cinemas
}

// 影院列表数据,地区列表数据
async function initCinemasList(
  allCinemaList,
  regionCinemaList,
  regionList,
  cityId,
  ticketFlag,
  k
) {
  const data = await cinemaListAPI(cityId, ticketFlag, k)

  const cinemas = data ? data.cinemas : null
  if (cinemas === null) {
    allCinemaList.value = regionCinemaList.value = regionList.value = null
    return
  }
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
  cinemaMovieList.value = data ? data.films : null
}

//影厅数据
async function initMovieHallList(movieHallList, filmId, cinemaId, date, k) {
  const data = await movieHallListAPI(filmId, cinemaId, date, k)
  movieHallList.value = data ? data.schedules : null
}
