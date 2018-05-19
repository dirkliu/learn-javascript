// 装饰器 
// 1. 类的修饰
// 修饰器是一个对类进行处理的函数。修饰器函数的第一个参数，就是所要修饰的目标类
// @testable
// class MyTestableClass {
//   // ...
// }

// function testable(target) {
//   target.isTestable = true;
// }

// MyTestableClass.isTestable // true
// 还可以传递参数
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false





// 2. 方法的修饰
// 修饰器不仅可以修饰类，还可以修饰类的属性。
class Person {
  @nonenumerable
  get kidCount() { return this.children.length; }
}

function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}


// 3. 不能用于函数
// 修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。


// 4.Babel 转码器的支持
// 首先，安装babel-core和babel-plugin-transform-decorators。由于后者包括在babel-preset-stage-0之中，所以改为安装babel-preset-stage-0亦可。