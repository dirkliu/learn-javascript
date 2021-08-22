let validator = {
  set (obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('年龄必须是整数')
      }
      if (value > 200) {
        throw new RangeError('年龄超过范围')
      }
    }

    obj[prop] = value
    return true
  }
}

let person = new Proxy({name: 'dd'}, validator);
person.name = 'ted'
person.age = 800
console.log('person.name:', person.name)
console.log('person.age:', person.age)