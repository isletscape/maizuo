var now_date = new Date() //获取Date对象
now_date.setHours(0) //设置小时
now_date.setMinutes(0) //设置分钟
now_date.setSeconds(0) //设置秒
now_date.setMilliseconds(0) //设置毫妙
// var timestamp = now_date.getTime() //获取毫秒时间戳
var stamp = Math.floor(now_date.getTime() / 1000)

var date =
  now_date.getFullYear() + '-' + now_date.getMonth() + '-' + now_date.getDate()

function timestampToDate(stamp) {
  return new Date(parseInt(stamp) * 1000)
    .toLocaleString()
    .replace(/:\d{1,2}$/, ' ')
}

export { stamp, date, timestampToDate }
