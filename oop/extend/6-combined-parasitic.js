function inheritObject (o) {
  function F () {}
  F.prototype = o;
  return new F();
}

function inheritPrototype (subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  var p = inheritObject(superClass.prototype);
  // 修正因为重写子类原型导致的contructor属性被修改
  p.constructor = subClass;
  // 设置子类的原型
  subclass.prototype = p
}

// 定义父类
function SuperClass(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
// 定义父类原型方法
SuperClass.prototype.getName = function() {
  console.log(this.name);
};

// 定义子类
function SubClass(name, time) {
  //构造函数式继承
  SuperClass.call(this, name);
  this.time = time;
}
// 寄生式继承父类原型
inheritPrototype(SubClass, SuperClass);
// 子类新增原型方法
SubClass.prototype.getTime = function() {
  console.log(this.time);
};
var instance1 = new SubClass("js book", 2017);
var instance2 = new SubClass("css book", 2017);

instance1.colors.push("black");
console.log(instance1.colors)
console.log(instance2.colors)
instance1.getName();
instance2.getName();
