import { seatingChartAPI, scheduleAPI } from '@/api/scheduleAPI.js'

export { initSeatingChart, initSchedule }
async function initSeatingChart(seatingCharts, scheduleId, k) {
  // if (localStorage.getItem('seatingCharts')) {
  //   seatingCharts.value = JSON.parse(localStorage.getItem('seatingCharts'))
  //   return
  // }
  const data = await seatingChartAPI(scheduleId, k)
  seatingCharts.value = data ? data.seatingChart : null
  // localStorage.setItem('seatingCharts', JSON.stringify(seatingCharts.value))
}

async function initSchedule(schedules, scheduleId, k) {
  // if (localStorage.getItem('schedules')) {
  //   schedules.value = JSON.parse(localStorage.getItem('schedules'))
  //   return
  // }
  const data = await scheduleAPI(scheduleId, k)
  schedules.value = data ? data.schedule : null
  // console.log('schedules', schedule)
  // localStorage.setItem('schedules', JSON.stringify(schedules.value))
}

// https://m.maizuo.com/gateway/?filmId=5741&cinemaId=65&date=1636992000&k=5367885
