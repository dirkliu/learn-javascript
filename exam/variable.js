'use strict';
//全局变量和函数都是作为
var name='json';
window.name='liu';
console.log(name);
console.log(window.name);

function testFunc(){
}
testFunc();
console.log('window.testFunc:',window.testFunc);
var Liu={
    name:'liuqi',
    showName:function(){
        console.log(name);
        var name=this.name;
        console.log(name);
    }
}

function outShowName(){
    console.log(name);
    var name='Json Liuqi';
    console.log(name);
}
Liu.showName();
outShowName();

//改变arguments对象是可以改变函数参数的;
function changeArguments(x,y){
    arguments[1]=1;
    console.log(x+y);
}
changeArguments(1,5);
