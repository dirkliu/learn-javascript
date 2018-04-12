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

//var today = new Date(2018,3,3,10,50,5).toLocaleString("zh-CN", {hour12: false}).replace(/(\d+)\/(\d+)\/(\d+).+/, '$1-$2-$3').replace(/\b\d\b/, '0$&').replace(/\b\d$/, '0$&')
// []里面不能匹配界定符 [\b]退格直接量
var today = new Date(2018,3,3,10,50,5).toLocaleString("zh-CN", {hour12: false}).replace(/(\d+)\/(\d+)\/(\d+).+/, '$1-$2-$3').replace(/\b\d\b/g, '0$&')
console.log('today:', today)

// 非贪婪的匹配
console.log('非贪婪的匹配555:', /\d+?/.exec('555'))

// 选择，分组和引用
// (?:...)只组合，但不记忆
var a123 = '\'123\''
console.log('匹配一对引号之间的内容：', /(["'])[^"']*\1/.test(a123))
console.log('匹配首尾相同的字符串', /^(\w{1}).*\1$/.test('a123a'))
console.log('只分组,不后向引用', /^(\w{1}(?:x)).*(fun)\1\2$/.test('ax231funaxfun'))

// 指定匹配位置
// (?=p)零宽正向先行断言
// (?!p)零宽负向先行断言
// 锚字符：^,$,\b,\B
console.log('零宽正向先行断言', /[Jj]ava([Ss]cript)?(?=\:)/.test('JavaScript: is fun'))
console.log('零宽负向先行断言', /Java(?!Script)([A-Z])\w*/.test('JavaScript'))

// 用于模式匹配的String方法 search, replace, match, split
// search 寻找匹配位置
console.log('cab123 匹配/ac/的位置:', 'cabc123'.search(/ab/))
// replace, 查找并替换，不带修饰符g只替换一个子串
console.log('replace 正则分组替换:', '"javascript"'.replace(/"([^"]*)"/g, ' “$1” '))
console.log('replace 替换子串:', 'javascript'.replace(/\w\B/g, '$&-'))
console.log('replace 还可以使用函数', 'javascript'.replace(/\w/g, function (letter, index, a) {
  return letter + (index === a.length -1 ? '' : '-')
}))
// match 用作匹配，带修饰符g，会进行全局搜索，不带，只检索第一个匹配
console.log('match 不带g', 'abc'.match(/\w?(\w+)/))
console.log('match 带g', 'abc cde'.match(/\w?(\w+)/g))
//split 使用正则表达式拆分字符串，组成数组
console.log('split 正则表达式使用：', '1,  2,  3,4,5,6,  7'.split(/\s*,\s*/))