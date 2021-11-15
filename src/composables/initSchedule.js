import { seatingChartAPI, scheduleAPI } from '@/api/scheduleAPI.js'
import { handleRequest } from './handleRequest'

export { initSeatingChart, initSchedule }
async function initSeatingChart(seatingCharts, scheduleId, k) {
  // if (localStorage.getItem('seatingCharts')) {
  //   seatingCharts.value = JSON.parse(localStorage.getItem('seatingCharts'))
  //   return
  // }

  const data = await seatingChartAPI(scheduleId, k)

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
      data: { seatingChart },
    },
  } = data

  seatingCharts.value = seatingChart

  // localStorage.setItem('seatingCharts', JSON.stringify(seatingCharts.value))
}

async function initSchedule(schedules, scheduleId, k) {
  // if (localStorage.getItem('schedules')) {
  //   schedules.value = JSON.parse(localStorage.getItem('schedules'))
  //   return
  // }

  const data = await scheduleAPI(scheduleId, k)

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
      data: { schedule },
    },
  } = data

  schedules.value = schedule
  // console.log('schedules', schedule)

  // localStorage.setItem('schedules', JSON.stringify(schedules.value))
}

// https://m.maizuo.com/gateway/?filmId=5741&cinemaId=65&date=1636992000&k=5367885
