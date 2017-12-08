//'use strict'
// 函数的调用
console.log('JAVASCRIPT的函数调用分为四种-->: 作为函数；作为方法；作为构造函数；call或apply间接调用。')

// 作为函数
var x = '1'
function strictTest () {
  var x= 'a';
  console.log('函数中的this指向全局对象或undefined', this.x)
}
strictTest();

// 作为方法
var o = {
  m: function () {
    var self = this;
    console.log('方法中的this指向调用它的对象', this === o);
    f();

    function f() {
      console.log('方法中嵌套函数里面this的值是window对象或undefined', this === o)
      console.log('slef指向外呼函数的this值', self === o)
    }
  }
}
o.m()

// 构造函数调用
// new Object 与new object() 是等价的，没有形参，可以省略括号
var oTest = {
  name: 'oTest',
  test: function () {
    this.x = '1'
    console.log(this.attr)
  }
}
var constructorTest = new oTest.test();

// 操作实参argument对象， 严格模式下会报错。
function opeArg (x) {
  console.log('操作实参argument对象1:', x)
  arguments[0] = null;
  console.log('操作实参argument对象2:', x)
}
opeArg()


// callee 与 caller， callee指代当前正在执行的函数。caller指代调用当前函数的函数
function factorial (x) {
  if (x <= 1) return 1;
  return x * arguments.callee(x-1)
}
console.log('arguments.callee调用: ', factorial(5))

// 闭包
// 函数每调用一次，都会创建一个新的作用域链
function counter () {
  var n = 0;
  return {
    count: function () { return n++;},
    reset: function () { n = 0;}
  }
}
var c = counter(), d = counter();
console.log('c.count():', c.count())
console.log('d.count():', d.count())
c.reset()
console.log('c.count()1:', c.count())
console.log('d.count()1:', d.count())
function constfuncs () {
  var funcs = [];
  for (var i= 0; i<10; i++) {
    funcs[i] = function () {return i;}
  };
  return funcs;
}
var funcs = constfuncs();
funcs[5](); //10

// 函数的类型
var typeFunc = function () {}
console.log('typeof function:', typeof typeFunc) // function
console.log('Object toString', Object.prototype.toString.call(typeFunc)) // [object Function]


// 函数属性， 方法和构造函数
function funcLength(x, y) {
  console.log('arguments.length 实参个数:', arguments.length)
  console.log('function.length 形参个数:', arguments.callee.length)
}
funcLength(3,2)
// call, apply 和 bind
// f.call(o, 1, 2)
// f.apply(o, [1, 2])
var numArray = [1,3,4,7,5]
var biggest = Math.max.apply(Math, numArray) // 求一个数组中的最大值


// 函数式编程
// 记忆函数
function memorize (f) {
  var cache = {}; // 将值保存在闭包内
  return function () {
    var key = arguments.length + Array.prototype.join.call(arguments, ",");
    if (key in cache) return cache[key];
    else return cache[key] = f.apply(this, arguments);
  };
}

// 返回两个整数的最大公约数
// 使用欧几里得算法： http://en,wikipedia.org/wiki/Euclidean_algorithm
function gcd(a, b) {
  var t;
  if (a < b) { // 确保 a >= b
    t=b;
    b=a;
    a=t;
  }
  while (b != 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}
var gcddemo = memorize(gcd);
console.log('85和187的最大公约数是:', gcddemo(85, 187))
