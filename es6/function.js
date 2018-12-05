function testArgs(...args) {
  console.log('args:', args.slice(1))
}

testArgs('a', 2, null, 'test')
