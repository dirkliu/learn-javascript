var arr = [1, 3, -1, 59, 58, 12, 56, 789, 456, 554];
var memory = [];
function sumTo(n) {
    if (memory[n]) {
        return memory[n];
    }

    if (n === 0) {
        memory.push(arr[0]);
        return arr[0];
    }
    console.log('sumTo n:',n);
    var sumX = arguments.callee(n - 1) + arr[n];
    memory.push(sumX);
    return sumX;
}
function sumRange(m, n) {
    return m ? sumTo(n) - sumTo(m - 1) : sumTo(n)
}
console.log(sumRange(1, 5));
console.log(memory);
console.log(sumRange(2, 4));