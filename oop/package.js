//一个Book类
//利用闭包实现私有属性，私有方法，公有属性，公有方法
var Book = (function () {
  // 静态私有变量
  var bookNum = 0;

  //静态私有方法
  function checkBook(name) {
  }

  //创建类
  function _book(newId, newName, newPrice) {
    //私有变量
    var name, price;

    //私有方法
    function checkId() {}

    //公有属性
    this.id = newId;

    //公有方法
    this.copy = function() {};
    this.getName = function() {};
    this.getPrice = function() {};
    this.setName = function() {};
    this.setPrice = function() {};
    bookNum++;

    this.setName(name);
    this.setPrice(price)
  }

  //构建原型
  _book.prototype = {
    //静态公有属性
    isJSBook: false,

    //静态公有方法
    display: function(){}
  };

  //返回类
  return _book;
})();


var b = new Book();
console.log(b.id)
console.log(b.bookNum)

