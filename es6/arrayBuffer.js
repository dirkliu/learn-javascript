const buf = new ArrayBuffer(32)
console.log('buf:', buf)
const dataView = new DataView(buf)
dataView.setInt8(0, 253) // 从第一个字节起写入一个8位的整数
console.log('dataView:', dataView.getInt8(0))
