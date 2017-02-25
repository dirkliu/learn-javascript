//扩展String，使其能够去除字符串首尾的空格；
String.prototype.trims=function () {
    return this.replace(/^\s+/,'').replace(/\s+$/,'');
}

var test='    sdfasdf    ';
console.log(test.trims().length);
