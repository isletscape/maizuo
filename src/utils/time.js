export { stamp, tomorrowStamp, date, timestampToDate }

const stamp = Math.round(new Date() / 1000)

const now_date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
now_date.setHours(0)
now_date.setMinutes(0)
now_date.setSeconds(0)
now_date.setMilliseconds(0)
// var timestamp = now_date.getTime() //毫秒时间戳
const tomorrowStamp = Math.floor(now_date.getTime() / 1000)

const date =
  new Date().getFullYear() +
  '-' +
  Number(new Date().getMonth() + 1) +
  '-' +
  new Date().getDate()

function timestampToDate(stamp) {
  return new Date(parseInt(stamp) * 1000)
    .toLocaleString()
    .replace(/:\d{1,2}$/, ' ')
}
