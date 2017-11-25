var fruits = ['pear', 'grape', 'apple', 'banana'];
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});

// 删除数组前头的元素shift
let first = fruits.shift()
console.log('first:', first)

// 法将一个或多个元素添加到数组的开头，并返回新数组的长度 unshift
let unshiftLength = fruits.unshift(5, 6)
console.log('unshiftLength:', unshiftLength)

//slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。原始数组不会被修改。
var sliceArr = ['a', 'b', 'c', 'd', 'e'];
var sliced = sliceArr.slice(0, 3);
console.log('sliceArr:', sliceArr);
console.log('sliced:', sliced);

// 类数组对象
var unboundSlice = Array.prototype.slice
var sliceFunc = Function.prototype.call.bind(unboundSlice)
function list () {
  return sliceFunc(arguments)
}
var list1 = list(1,2,3)
console.log('list1:', list1)

// entries 回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
var arr = ["a", "b", "c"];
var iterator = arr.entries();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// indexOf 和 lastIndexOf 判断指定元素的出现位置
var indexArr = ['test', 'indexOf', 'last', 'index', 'indexOf'];
console.log('indexOf, 元素首次出现的位置', indexArr.indexOf('indexOf'))
console.log('lastIndexOf, 元素首次出现的位置', indexArr.lastIndexOf('indexOf'))

// 数组类型检测
console.log('ecma5数组类型检测方法 Array.isArray：', Array.isArray(arr));
// ecmascript5之前
var isArray = Function.isArray || function (o) {
  return typeof o === "object" && Object.prototype.toString.call(o) === '[object Array]'
}

// 判定一个对象是否是类数组对象
// 字符串核函数有length 属性， 但是它们可以用typeof将其排除。
// 在客户端javascript中，DOM文本节点也有length属性，需要用额外判断o.nodeType != 3将其排除
function isArrayLike (o) {
  if (o &&
      typeof 0 === 'object' &&
      isFinite(o.length) &&
      o.length >=0 &&
      o.length === Math.floor(o.length) &&
      o.length < 429467296) {
      return true
  } else {
    return false
  }
}
// 模拟类数组对象，并对其进行操作
var arrayLike = {"0": "a", "1": "b", "2": "c", length: 3};
var joinStr = Array.prototype.join.call(arrayLike, '+');
var arrayClone = Array.prototype.slice.call(arrayLike, 0);
console.log('类数组对象判断:', isArrayLike(arrayLike))
console.log('类数组对象的数组副本:', arrayClone)

// 作为数组的字符串
var s = "test";
console.log(s.charAt(0));
console.log(s[1])
