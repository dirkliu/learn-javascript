document.addEventListener('ondatatest', function (event) {
    console.log(event)
}, false)

var event = document.createEvent('HTMLEvents');
event.initEvent("ondatatest", true, true);
event.eventType = 'message';
document.dispatchEvent(event)
