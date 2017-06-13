var x=10;
var foo={
    x:20,
    bar:function(){
        x=30;
        return this.x;
    }
}
console.log('foo.bar():',foo.bar());//20
console.log('(foo.bar)():',(foo.bar)());//20
console.log('(foo.bar=foo.bar)():',(foo.bar=foo.bar)());//30
console.log('(foo.bar,foo.bar)():',(foo.bar,foo.bar)());//30
console.log('foo.bar.call(window):',foo.bar.call(window));//30
console.log('foo.bar.call(foo):',foo.bar.call(foo));//20

function a(){
    console.log('a');
}

function b(){
    console.log('b');
}
(a,b)();
