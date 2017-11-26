// 'use strict'
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

// 测试一下vue 源码里的?:用法， 发现报错。
// var op= function (a?: string, b?: boolean) {
//   console.log('a?:', a)
//   console.log('b?:', b)
// }
// op('test', false)
// var a = null;
// var b = 'test';
// // var y = a?: b;
// console.log(a?: b)
