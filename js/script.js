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
      var rotations = Math.floor((this.rotation)/360)
        if (rotations==50) {
          alert("Congratulations! You are a math genius!")
          $(".bikeroom").fadeOut();
        }
        $("#rotationsno").html("7+7&divide7x7-7="+rotations);
    }
  });


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



  $("#mouthanswer").keypress(function(e) {
     //check if enter is pressed
   if(e.keyCode == 13) {
        $(".mouth").fadeOut();
    }
  });





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
