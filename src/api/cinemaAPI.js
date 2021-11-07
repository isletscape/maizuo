import request from '@/api/request'

export const cinemaListAPI = function (cityId, ticketFlag, k) {
  return request.get('/gateway', {
    params: {
      cityId: cityId,
      ticketFlag: ticketFlag,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.cinema.list',
    },
  })
}

//1636300800
//1636214400

export const cinemaMovieListAPI = function (cinemaId, date, k) {
  return request.get('/gateway', {
    params: {
      cinemaId: cinemaId,
      date: date,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.film.cinema-show-film',
    },
  })
}
export const movieHallListAPI = function (filmId, cinemaId, date, k) {
  return request.get('/gateway', {
    params: {
      filmId: filmId,
      cinemaId: cinemaId,
      date: date,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.schedule.list',
    },
  })
}
