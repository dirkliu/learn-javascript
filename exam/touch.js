var ul = document.getElementsByTagName('ul')[0];
var li = document.createElement('li');
var mainDom = document.getElementById("main");

mainDom.addEventListener('click', function () {
    console.log('click is trigger');
    var liDom = li.cloneNode(true);
    console.log('liDom:', liDom);
    liDom.innerHTML = "clicks";
    ul.appendChild(liDom);
}, false);

mainDom.addEventListener('touchstart', function () {
    console.log('touchstart is trigger');
    var liDom = li.cloneNode(true);
    liDom.innerHTML = 'touchStarts';
    ul.appendChild(liDom);
}, false);

mainDom.addEventListener('touchmove', function () {
    console.log('touchmove is trigger');
    var liDom = li.cloneNode(true);
    liDom.innerHTML = 'touchmove';
    ul.appendChild(liDom);
}, false);

mainDom.addEventListener('touchend', function () {
    console.log('touchend is trigger');
    var liDom = li.cloneNode(true);
    liDom.innerHTML = 'touchend';
    ul.appendChild(liDom);
}, false);
