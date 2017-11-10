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
