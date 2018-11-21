function timeout (ms) {
//  return Promise.resolve(setTimeout(Promise.resolve, ms))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

async function asyncPrint (value, ms) {
  const delay = await timeout(ms);
  console.log('delay * 2:', delay * 2)
  console.log(value + ' ' + ms);
}

asyncPrint('test async timeout', 5000)
