//date transform to YYYY-mm-dd
new Date().toLocaleString('zh-CN', {hour12: false}).replace(/\//g, '-').replace(/\b\d\b/g, '0$&').replace(/\s(\d{1,2}:)*\d{1,2}/, '')

// date transform YYYY-mm-dd HH:i:s
new Date().toLocaleString('zh-CN', {hour12: false}).replace(/\//g, '-').replace(/\b\d\b/g, '0$&')

// 兼容写法: 低版本浏览器toLocaleString不兼容locales和options参数
function getDateString (date) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let dates = date.getDate()
  return year + '-' + (month > 9 ? month : '0' + month) + '-' + (dates > 9 ? dates : '0' + dates)
}

function getTimeString (date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds)
}
var today = getDateString(new Date())
var now = getTimeString(new Date())
console.log('现在是：' + today + ' ' + now)
