// 类的所有实例对象都从同一原型对象上继承属性
// 构造函数是用来初始化新创建的对象。构造函数的prototype被用作新对象的原型
// Test其实是个构造函数，方法都放在prototype中
class Test {
  a = 1
  b = 2

  constructor () {
  }

  getNumbers () {
  }
}

var test = new Test()

// ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
class Point {
  // 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  toString () {
    let position = '(' + this.x + ',' + this.y + ')'
    console.log('position:', position)
    return '(' + this.x + ', ' + this.y + ')'
  }

  // set ids (value) {
  //   this.idList = value.split(',')
  // }
  set idList (value) {
    this.ids = value.join(',')
  }

  get idList () {
    return this.ids ? this.ids.split(',') : []
  }
}

var p = new Point(10, 65)
// p.ids = '1,3,45,5'
Object.assign(p, {
  ids: '1,2,3,22,33'
})
console.log('idList:', p.idList)
p.idList = [1,3,4,5,6,7,8,9]
// p.idList.push(100) // push不会触发setter
console.log('ids:', p.ids)
p.toString()
