let s = Symbol()
let s1 = Symbol('test')
let s2 = Symbol('test')

console.log('Symbol-->s:', s)
console.log('Symbol-->s1:', s1)
console.log('Symbol-->s2:', s2)
console.log('s1 === s2:', s1 === s2)

// 作为属性名的symbol
let mySymbol = Symbol();
// 第一种写法
// let a = {};
// a[mySymbol] = 'Hello1!'
// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello2!'
// }
// 第三种写法
let a = {}
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
console.log('a[mySymbol]:', a[mySymbol]) // "Hello!"

// 属性名的遍历
let size = Symbol('size');
class Collection {
  constructor() {
    this[size] = 0;
  }
  add(item) {
    this[this[size]] = item;
    this[size]++;
  }
  static sizeOf(instance) {
    return instance[size];
  }
}
let x = new Collection();
console.log('Collection.sizeOf(x):', Collection.sizeOf(x)) // 0
x.add('foo')
Collection.sizeOf(x) // 1
Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']