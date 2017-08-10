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
SubClass.prototype = new SuperClass();
SubClass.prototype.name = 'SubClass';
SubClass.prototype.names = ['SubClass']
SubClass.prototype.getSubValue = function () {
  return this.subValue
}

var instance = new SubClass();
var instance1 = new SubClass()
instance.name = 'instance'
instance.names.push('instance')
instance.names = ['instance']
instance1.name = 'instance1'
instance1.names.push('instance1')
console.log('instance name:', instance.name)
console.log('instance1 name:', instance1.name)
console.log('instance names:', instance.names)
console.log('instance1 names:', instance1.names)
console.log('instance:', instance)


console.log(instance.getSuperValue())
console.log(instance.getSubValue())

console.log(instance instanceof SuperClass)
console.log(instance instanceof SubClass)
console.log(SubClass instanceof SuperClass)
console.log(SubClass.prototype instanceof SuperClass)
