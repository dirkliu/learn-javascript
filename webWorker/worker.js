/**
 * webWorker demo
 * 创建一个Web Worker线程处理图片
 */
function smear(img){
    //创建一个和图片尺寸大小相同的屏幕外canvas
    var canvas=document.createElement('canvas');
    canvas.width=img.width;
    canvas.height=img.height;

    //将图片复制到canvas中，然后提取像素
    var context=canvas.getContext("2d");
    context.drawImage(img,0,0);
    var pixels=context.getImageData(0,0,img.width,img.height);

    //将像素信息传递给Worker线程；
    var worker=new Worker('./SmearWorker.js');//创建Worker线程；
    worker.postMessage(pixels);//复制和传递像素信息

    //注册事件处理程序来获取Worker的响应
    worker.onmessage=function(e){
        var smearred_pixels=e.data;//从Worker获取的像素信息
        context.putImageData(smearred_pixels,0,0);//将他们复制到画布中
        img.src=canvas.toDataURL();
        worker.terminate();
        canvas.width=canvas.height=0;
    }
}

