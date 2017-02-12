/**
 * ajax POST json数据
 * @param url
 * @param data
 * @param callback
 */
function postJSON(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = function () {

    }
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}

function creatXhr() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        if(typeof arguments.callee.activeXString!='string'){
            var versions=['MSXML2.XMLHTTP.6.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP'];
            for(var i=0;i<versions.length;i++){
                try{
                    var xhr=new ActiveXObject(versions[i]);
                    arguments.callee.activeXString=versions[i];
                    return xhr;
                }catch(ex){

                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        }
    } else {
        throw new Error('XMLHttpRequest is not supported!');
    }
}