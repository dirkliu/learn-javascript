var text = "cat, bat, sat, fat";
var result = text.replace(/(.at)/g, "($1) word");
console.log('result:', result)
var urlx = "asdfa src=\"abc.img\"";
var urlRes = urlx.replace(/(src=\"\.+\")/g, "$1axc")
console.log('urlRes:', urlRes)
