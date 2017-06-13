var marqueeScroll = document.getElementsByClassName('marquee-scroll')[0];
var slide1 = document.getElementsByClassName('slide1')[0];
var slide2 = document.getElementsByClassName('slide2')[0];
slide2.innerHTML=slide1.innerHTML;
roll(16.67, 2000, 0)

function roll(speed, delay, n) {
  var tk = setInterval(() => {
    var currentHead = slide1.getElementsByTagName('li')[n]
    if (-marqueeScroll.offsetTop < currentHead.offsetTop + currentHead.offsetHeight) {
      marqueeScroll.style.top = (marqueeScroll.offsetTop-1) + 'px';
    } else {
      clearInterval(tk);
      var k = n==slide1.getElementsByTagName('li').length-1 ? 0 : n+1
      setTimeout(() => {
        if (k===0) {
          marqueeScroll.style.top = 0;
        }
        roll(speed, delay, k);
        }, delay);
      }
    },speed)
}
