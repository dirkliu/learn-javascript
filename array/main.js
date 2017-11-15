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
