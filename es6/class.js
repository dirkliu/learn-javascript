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
}

var p = new Point(10, 65)
p.toString()
