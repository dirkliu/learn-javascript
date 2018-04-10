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

// 选择，分组和引用
// (?:...)只组合，但不记忆
var a123 = '\'123\''
console.log('匹配一对引号之间的内容：', /(["'])[^"']*\1/.test(a123))
console.log('匹配首尾相同的字符串', /^(\w{1}).*\1$/.test('a123a'))
console.log('只分组,不后向引用', /^(\w{1}(?:x)).*(fun)\1\2$/.test('ax231funaxfun'))
