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
            $("#alertGenius").fadeIn(100);
          }else {
            $("#alertThink").fadeIn(100);
            setTimeout(function () {
              $("#alertThink").fadeOut(100);
            },2500)
          }

        })

        $("#rotationsno").html("7 + 7 &divide 7 + 7 &times 7 - 7 = "+rotations);
    }
  });

  $("#alertGenius").click(function(){
    $(".bikeroom").fadeOut(2000);
  })

  $("#avocadoinput").keyup(function(){
    if(this.value == "avocado" || this.value=="AVOCADO" || this.value=="Avocado"){
      if(event.keyCode == 13) {
        $("#avocadoshape").fadeOut(100);
        $("#avocado").fadeIn(1000);
        $("#avocadoinput").fadeOut(100);
        $("#avocadoenter").fadeOut(100);
      }
      $("#avocadoenter").click(function(){
        $("#avocadoshape").fadeIn(1000);
        $("#avocadoinput").fadeOut(100);
        $("#avocadoenter").fadeOut(100);
      })
    }else{
      if(event.keyCode == 13) {
        $("#avocadoW").fadeIn(100);
      }
      $("#avocadoenter").click(function(){
        $("#avocadoW").fadeIn(100);
      })
      setTimeout(function () {
        $("#avocadoW").fadeOut(100);
      },2500)
  }
})

  $("#avocado").click(function () {
    $(".avocado").fadeOut(2000);
  })


  $("#mouthanswer").keyup(function(){
    if(this.value == "kasey" || this.value=="KASEY" || this.value=="Kasey"){
      if(event.keyCode == 13) {
        $("#alertMouth").fadeIn(100);
      }
      $("#mouthenter").click(function(){
        $("#alertMouth").fadeIn(100);
      })
    }else{
      if(event.keyCode == 13) {
        $("#alertMouthW").fadeIn(100);
      }
      $("#mouthenter").click(function(){
        $("#alertMouthW").fadeIn(100);
      })
      setTimeout(function () {
        $("#alertMouthW").fadeOut(100);
      },2500)
  }
})

  $("#alertMouth").click(function(){
    $(".mouth").fadeOut(2000);
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
