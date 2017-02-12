/**
 * 事件绑定函数
 * @param dom
 * @param type
 * @param callback
 */
function bindEvent(dom,type,callback){
    if(dom.addEventListener){
        dom.addEventListener(type,callback,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,callback);
    }else{
        dom['on'+type]=callback;
    }
}