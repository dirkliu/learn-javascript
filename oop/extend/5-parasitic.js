//寄生式继承
// 声明基对象
var book = {
  name: "js book"
  alikeBook: ["css book", "html book"]
}
function inheritObject (o) {
  function F () {}
  F.prototype = o;
  return new F();
}
function createBook(obj) {
  var o = inheritObject(obj)
  o.getName = function () {
    console.log(name)
  }
  return o
}
