'use strict';
// Object 的length 为1，可以这样理解啊，函数的length就是它的参数的个数啊
console.log('Object.length:', Object.length)
var a = Object.create({x:1, y:2});

var ar = Object.create(Array)

// 可配置的的对象, 数据双向绑定。
var config = {};
var aVal = '1'
Object.defineProperty(config, 'a', {
  get: function () {
    return aVal
  },
  set: function (newVal) {
    aVal = newVal
  }
})
config.a = '2'
console.log(aVal)
aVal = 3
console.log('a:', config.a)


// 对象的可扩展性， 属性的特性：可读，可写，可配置和可枚举
// 遍历，枚举
function ObjTest () {
  this.a = 'a';
  this.b = 'b';
  this.c = function () {}
}
ObjTest.prototype = {
  x: 'x'
}
var objTest = new ObjTest();
console.log('objTest 遍历：')
for (var i in objTest) {
  console.log('属性名：', i, ', 值：', objTest[i], ', 可枚举性：', objTest.propertyIsEnumerable(i))
}
console.log('ObjTest.prototype:', ObjTest.prototype)
console.log('objTest a propertyDecripter:', Object.getOwnPropertyDescriptor(objTest, 'a')) // 只能得到自有属性的属性描述符
// Object.defineProperty属性的特性，配置，枚举，值，存取器，存取器与值不能同时设置：
var objTest1 = new ObjTest();
Object.defineProperty(objTest1, 'y', {
  configurable: false,
  writable: true,
  ennumerable: false,
  value: 1
})
objTest1.y = 'y'
console.log('objTest1 y:', objTest1.y)
// 会报错，不可配置的属性，不能重新设置属性特性。 也不能删除这个属性
// Object.defineProperty(objTest1, 'y', {
//   configurable: true
// })

//可扩展性，是否可以新增属性？
console.log('objTest1 是否可扩展：', Object.isExtensible(objTest1))
var objTest2 = new ObjTest();
Object.preventExtensions(objTest2)
console.log('objTest2 是否可扩展：', Object.isExtensible(objTest2))
//密封对象：不可扩展，所有自有属性不可配置，不可删除。
console.log('objTest2 是已密封？', Object.isSealed(objTest2))
Object.seal(objTest2);
console.log('objTest2 是已密封？', Object.isSealed(objTest2))
// 冻结对象: 不可扩展，所有属性都是不可配置的，其所有数据属性都是不可写的。
console.log('objTest2 是已冻结？', Object.isFrozen(objTest2))
Object.freeze(objTest2);
console.log('objTest2 是已冻结？', Object.isFrozen(objTest2))
