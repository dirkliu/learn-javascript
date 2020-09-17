/**
 * Object.assign不是深拷贝
 */

var a = {
  name: 222
}

var b = {
  a: a
}

var c = Object.assign({}, b);
a.name = '777'

console.log('c:', c)
