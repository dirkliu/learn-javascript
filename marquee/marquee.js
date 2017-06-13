var marqueeScroll = document.getElementsByClassName('marquee-scroll')[0];
var slide1 = document.getElementsByClassName('slide1')[0];
var slide2 = document.getElementsByClassName('slide2')[0];
slide2.innerHTML=slide1.innerHTML;
roll(16.67, 1000)

function roll(speed, delay) {
  var scrollHeight = 0;

  var tk = setInterval(() => {
    if (scrollHeight>=document.querySelector('.slide1 > li').offsetHeight) {
      clearInterval(tk);
      setTimeout(() => {
                    roll(speed, delay)
                }, delay);
    }
    if (slide1.offsetHeight <= -marqueeScroll.offsetTop){
      marqueeScroll.style.top = 0;
    } else {
      scrollHeight++;
      marqueeScroll.style.top = (marqueeScroll.offsetTop-1) + 'px';
    }
  },speed)
}
