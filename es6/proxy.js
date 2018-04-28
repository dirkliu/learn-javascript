let proxy = new Proxy({}, {
  get: function (target, property) {
    console.log('getting target --> ', target, ', property --> ', property)
    console.log('target[property]:', target[property])
    return target[property]
  },
  set: function (target, property, value) {
    console.log('setting target --> ', target, ', property --> ', property, ', value -->', value)
    target[property] = value
  }
})

proxy.time = 20
console.log('proxy time', proxy.time)
