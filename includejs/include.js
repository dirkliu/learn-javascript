var includejs={};
function include(className){
    var script=document.createElement('script');
    script.src=className+'.js';
    document.body.appendChild(script);
    document.body.removeChild(script);
}