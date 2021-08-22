/**
 * 编写函数一个函数，实现如下功能：
For example:
  Input: {
    key1: 2344,
    key2: ['1', '2323'],
    key3: [{
      ckey: 1
    }]
  }

  Output: {
    key1: 2344,
    'key2-0': '1',
    'key2-1': '2323',
    'key3-0-ckey': 1
  }
**/
let input = {
  key1: 2344,
  key2: ['1', '2323'],
  key3: [{
    ckey: 1
  }] 
}
let output = {}
let routes = []
function flattern (source, newObj, routes) {
  let type = Object.prototype.toString.call(source).slice(8, -1)
  switch (type) {
    case 'Object':
      // flattern(source, newObj, prefix)
      for (let key in source) {
        flattern(source[key], newObj, routes.concat(key))
      }
      break
    case 'Array':
      source.forEach((item, index) => {
        flattern(item, newObj, routes.concat(index))
      })
      break
    default: 
      newObj[routes.join('-')] = source  
  }
}

flattern(input, output, [])

console.log('output:', output)

// export default flattern
