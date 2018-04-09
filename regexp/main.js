var text = "cat, bat, sat, fat";
var result = text.replace(/(.at)/g, "($1) word");
console.log('result:', result)
var urlx = "asdfa src=\"abc.img\"";
var timeStr = new Date().valueOf();
var urlRes = urlx.replace(/src=\"(.+)"/g, "src=\"$1?" + timeStr +"\"")
console.log('urlRes:', urlRes)

console.log('---获取查询字符串参数----')
function getQuery (name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r!=null) return unescape(r[2]); return null;
}
console.log(getQuery('test'))

var today = new Date().toLocaleString("zh-CN", {hour12: false}).replace(/(\d+)\/(\d+)\/(\d+).+/, '$1-$2-$3')
console.log(today)

// 非贪婪的匹配
console.log('非贪婪的匹配555:', /\d+?/.exec('555'))