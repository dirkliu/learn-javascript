function timeout (ms) {
//  return Promise.resolve(setTimeout(Promise.resolve, ms))
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

async function asyncPrint (value, ms) {
  await timeout(ms);
  console.log(value + ' ' + ms);
}

asyncPrint('test async timeout', 5000)
