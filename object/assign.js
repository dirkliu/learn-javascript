/**
 * Object.assign不是深拷贝
 */

var a = {
  name: 222
}

var b = {
  a: a,
  name: '7qqq'
}

var c = Object.assign({}, b);


console.log('c:', c)

var d = Object.assign({}, b)
b.name = 'aggd'

console.log('d:', d)
