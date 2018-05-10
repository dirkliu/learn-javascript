// 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
var a = {}
Reflect.defineProperty(a, 'test', {
  get () {
    return new Date().valueOf()
  },
  set (val) {
    console.log('set time now:', val)
  }
})

console.log(a.test)
a.test = 56785
console.log(a.test)
