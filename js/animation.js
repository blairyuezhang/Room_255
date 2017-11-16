$(document).ready(function(){
var cactus1 = bodymovin.loadAnimation({
  container: document.getElementById('title'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'js/ani/title/data.json'
})

setTimeout(function(){
  $('#title').fadeOut(1500);
},6000)

// setTimeout(function(){
//   alert('Hello! Welcome to Room 255! You are about to enter an adventure.');
// },9000)

var doorani = bodymovin.loadAnimation({
  container: document.getElementById('doorbg'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'js/ani/door/data.json'
})


var cactus1 = bodymovin.loadAnimation({
  container: document.getElementById('cactus1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/ani/cactus1/data.json'
})

var bikebgani = bodymovin.loadAnimation({
  container: document.getElementById('bikebg'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'js/ani/bike/data.json'
})

// $('#bikeroll').click(function(){
//   bikebgani.play();
//   console.log('hello');
// });


$('#door').click(function(){
  doorani.play();
  bikebgani.play();
  $("#cactus1").fadeOut(100);
  setTimeout(function(){
    $(".door").fadeOut(1500);
  },500);

});

})
