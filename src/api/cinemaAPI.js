import request from '@/api/request'

export {
  allCinemaAPI,
  ticketsCinemaAPI,
  cinemaListAPI,
  cinemaMovieListAPI,
  movieHallListAPI,
}

const allCinemaAPI = function (cityId, ticketFlag, k) {
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

const ticketsCinemaAPI = function (filmId, cityId, k) {
  return request.get('/gateway', {
    params: {
      filmId: filmId,
      cityId: cityId,
      k: k,
    },
    headers: {
      'X-Host': 'mall.film-ticket.cinema.film-show-cinema',
    },
  })
}

const cinemaListAPI = function (cityId, ticketFlag, k) {
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

const cinemaMovieListAPI = function (cinemaId, date, k) {
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

const movieHallListAPI = function (filmId, cinemaId, date, k) {
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
