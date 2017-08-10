// 洁净的继承者--原型式继承
function inheritObject (o) {
  function F () {}
  F.prototype = o;
  return new F();
}
var book = {
  name: "js book",
  alikeBook: ["css book", "html book"]
}

var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
newBook.name = "flash book";
newBook.alikeBook.push("as book");

console.log('newBook.name:', newBook.name)
console.log('newBook.alikeBook:', newBook.alikeBook)

console.log('otherBook.name:', otherBook.name)
console.log('newBook.alikeBook:', newBook.alikeBook)
