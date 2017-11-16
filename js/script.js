$(document).ready(function(){

  $(window).resize(function() {
    $("#bikewidth").width($(bike).width());
  }).resize();
  $(window).resize(function() {
    $("#bikewidth").height($(bike).height());
  }).resize();


  Draggable.create("#bikeroll", {
    type: "rotation",
    throwProps: true,
    onDrag : function(){
      var rotations = Math.floor((this.rotation)/360*10)

        $("#enter").click(function() {
          if (rotations==50){
            $("#alertGenius").fadeIn();
          }else {
            $("#alertThink").fadeIn();
          }

        })

        $("#rotationsno").html("7 + 7 &divide 7 + 7 &times 7 - 7 = "+rotations);
    }
  });

  $("#alertThink").click(function(){
    $(this).fadeOut(100);
  })

  $("#alertGenius").click(function(){
    $(".bikeroom").fadeOut(2000);
  })


  $("#avocadop").click(function(event){
    $("#avocadodirt").eraser({
      size: 30,
      completeRatio: .4,
      completeFunction: hideDirt
    });
  });

  function hideDirt(){
    $("#avocadodirt").fadeOut(2000);
    setTimeout(function(){
      $(".avocado").fadeOut(1000);
    }, 4000);
  }


  $("#mouthanswer").keyup(function(){
    if(this.value == "kasey" || this.value=="KASEY" || this.value=="Kasey"){
      if(event.keyCode == 13) {
        $("#alertMouth").fadeIn(100);
      }
      $("#mouthenter").click(function(){
        $("#alertMouth").fadeIn(100);
      })
    }else{
        console.log("hi");
    }
  })

})



function playdo() {
  var sounddo = document.getElementById("do");
  sounddo.play();
}

function playre() {
  var soundre = document.getElementById("re");
  soundre.play();
}

function playmi() {
  var soundmi = document.getElementById("mi");
  soundmi.play();
}

function playfa() {
  var soundfa = document.getElementById("fa");
  soundfa.play();
}

function playsol() {
  var soundsol = document.getElementById("sol");
  soundsol.play();
}

function playla() {
  var soundla = document.getElementById("la");
  soundla.play();
}

function playsi() {
  var soundsi = document.getElementById("si");
  soundsi.volume = 0.2;
  soundsi.play();
}
