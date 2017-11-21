var text = "cat, bat, sat, fat";
var result = text.replace(/(.at)/g, "($1) word");
console.log('result:', result)
var urlx = "asdfa src=\"abc.img\"";
var timeStr = new Date().valueOf();
var urlRes = urlx.replace(/src=\"(.+)"/g, "src=\"$1?" + timeStr +"\"")
console.log('urlRes:', urlRes)
