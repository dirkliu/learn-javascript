//以下代码均摘自 Nicholas C.Zakas《Professional JavaScript for Web Developers》
//组合继承实例代码：

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
};
function SubType(name, age) {
  //通过call()调用SuperType的构造函数，继承SuperType属性
  SuperType.call(this, name);                 //第二次调用SuperType()
  this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function() {
  console.log(this.age);
};
var instancel = new SubType("Nicholas", 12);    //第一次调用SuperType()
instancel.colors.push("black");
console.log(instancel.colors);    //"red,blue,green,black"
instancel.sayName();              //"nicholas"
instancel.sayAge();               //12

var instancel2 = new SubType("Tom", 11);
console.log(instancel2.colors);   //"red,blue,green"
instancel2.sayName();             //"Tom"
instancel2.sayAge();              //11