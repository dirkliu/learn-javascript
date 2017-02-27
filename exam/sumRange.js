var timeStart=new Date().getTime();
var arr=[];
for (var i=0;i<100000;i++){
    arr.push(parseInt(Math.random()*10));
}
console.log('数组生成用时：',new Date().getTime()-timeStart);

var memory = [];
function sumTo(n) {
    if (memory[n]) {
        return memory[n];
    }

    if (n === 0) {
        memory.push(arr[0]);
        return arr[0];
    }
    var sumX = arguments.callee(n - 1) + arr[n];
    memory.push(sumX);
    return sumX;
}
function sumRange(m, n) {
    return m>1 ? sumTo(n-1) - sumTo(m - 2) : sumTo(n-1)
}

function sumRangeFor(m,n){
    var s=0;
    for(var i=m-1;i<n;i++){
        s+=arr[i];
    }
    return s;
}
var time1=new Date().getTime();
var s1=sumRangeFor(3, 100000);
console.log('使用for循环计算3-10000000个元素相加',s1);
console.log('用时：',new Date().getTime()-time1);

var time2=new Date().getTime();
var s2=sumRange(3, 100000);
console.log('使用sumRange计算3-10000000个元素相加',s2);
console.log('用时：',new Date().getTime()-time2);

var time3=new Date().getTime();
var s3=sumRangeFor(2, 100000);
console.log('使用for循环计算2-10000000个元素相加',s3);
console.log('用时：',new Date().getTime()-time3);

var time4=new Date().getTime();
var s4=sumRange(2, 100000);
console.log('使用sumRange计算2-10000000个元素相加',s4);
console.log('用时：',new Date().getTime()-time4);