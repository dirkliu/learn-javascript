/**
 * Created by 7ge on 2017/2/25.
 * 返回一个将指定字符串str重复count次的新字符串；
 * 巧妙地使用位运算，将count转化为二进制数，逐位对字符串进行拼接；
 * 如repeat('asd',5),二进制最低位是1，所以拼接'asd',第二低位是0，所以不拼接，最高位是1，所以接上'asdasdasdasd'
 */
function repeat(str, count) {
    var result = '';
    var loopTime=count.toString(2).length;
    for (var i = 0; i < loopTime; i++) {
        if (count & 1) {
            result += str;
        }

        count >>= 1;
        count && (str += str);
    }

    return result;
}

console.log(repeat('aa',2));
