// {
//   let a = 1
//   var b = 2
// }
// console.log('a:', a)
// console.log('b:', b)

// let 不存在变量提升
// console.log(a)
// var a = '2'
// console.log(b)
// let b = 'c1'

// 暂时性死区：在代码块内，使用let命令声明变量之前，该变量都是不可用的
// var tmp = 123;
// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// 块级作用域
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
})();
