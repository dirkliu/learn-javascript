function timeout (ms) {
//  return Promise.resolve(setTimeout(Promise.resolve, ms))
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

function rejectDelay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(ms)
    }, ms)
  })  
}

async function asyncPrint (value, ms) {
  const delay = await timeout(8000)
  console.log('delay * 2:', delay * 2)
  console.log(value + ' ' + ms);
  const delayT = await rejectDelay (5).catch(err => {
    console.log('err:', err)
  })
  console.log('delayT:', delayT)
  return delay
}

async function loadAsync () {
  console.log('tttt')
  let delay = await asyncPrint()
  console.log('hhhh:', delay)
}
// asyncPrint('test async timeout', 5000)
loadAsync()
