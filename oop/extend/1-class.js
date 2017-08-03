//类式继承
// 声明父类
function SuperClass() {
  this.superValue = true
}

//为父类添加公有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue;
}

//声明子类
function SubClass () {
  this.subValue = false;
}

//继承父类
SubClass.protptype = new SuperClass();
SubClass.prototype.getSubValue = function () {
  return this.subValue
}

var instance = new SubClass();
console.log(instance.getSuperValue())
console.log(instance.getSubValue())

console.log(instance instanceof SuperClass)
console.log(instance instanceof SubClass)
console.log(SubClass instanceof SuperClass)
console.log(SubClass.prototype instanceof SuperClass)
