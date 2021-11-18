import { seatingChartAPI, scheduleAPI } from '@/api/scheduleAPI.js'

export { initSeatingChart, initSchedule }

async function initSeatingChart(seatingCharts, scheduleId, k) {
  const data = await seatingChartAPI(scheduleId, k)
  seatingCharts.value = data ? data.seatingChart : null
}

async function initSchedule(schedules, scheduleId, k) {
  const data = await scheduleAPI(scheduleId, k)
  schedules.value = data ? data.schedule : null
}
