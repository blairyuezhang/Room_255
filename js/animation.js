$(document).ready(function(){
var cactus1 = bodymovin.loadAnimation({
  container: document.getElementById('title'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'js/ani/title/data.json'
})

setTimeout(function(){
  $('.title').fadeOut(1500);
},6000)


var doorani = bodymovin.loadAnimation({
  container: document.getElementById('doorbg'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'js/ani/door/data.json',
  rendererSettings: {
        preserveAspectRatio:'none'
    }
})


var cactus1 = bodymovin.loadAnimation({
  container: document.getElementById('cactus1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/ani/cactus1/data.json',
  rendererSettings: {
        preserveAspectRatio:'none'
    }
})

var bikebgani = bodymovin.loadAnimation({
  container: document.getElementById('bikebg'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'js/ani/bike/data.json',
  rendererSettings: {
        preserveAspectRatio:'none'
    }
})


var echoani = bodymovin.loadAnimation({
  container: document.getElementById('echo'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'js/ani/echo/data.json',
  rendererSettings: {
        preserveAspectRatio:'none'
    }
})

var mouthani = bodymovin.loadAnimation({
  container: document.getElementById('mouth'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'js/ani/mouth/data.json'
})

var iceani = bodymovin.loadAnimation({
  container: document.getElementById('iceglow'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/ani/icecream/data.json'
})


$('#door').click(function(){
  doorani.play();
  bikebgani.play();
  $("#cactus1").fadeOut(100);
  setTimeout(function(){
    $(".door").fadeOut(1500);
  },500);
});

$('#mouth').click(function () {
  mouthani.goToAndPlay(1,true);
  echoani.goToAndPlay(1,true);
  playVoice();
})


})


function playVoice() {
  var voice = document.getElementById("voice");
  voice.play();
}
