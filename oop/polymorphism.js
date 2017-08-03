// 多态
function Add () {
  // 无参数运算
  function zero () {
    return 10;
  }

  function one (num) {
    return 10 + num
  }

  function two (num1, num2) {
    return  num1 + num2
  }


  this.add = function () {
    // 获取参数
    var arg = arguments,
      //获取长度
      len = arguments.length;

    switch (len) {
      // 如果没参数
      case 0:
        return zero();
      // 如果一个参数
      case 1:
        return one();
      //如果2个参数
      case 2:
        return two()
    }
  }
}

var A = new Add();
console.log(A.add());
console.log(A.one(1));
console.log(A.add(1,5))
