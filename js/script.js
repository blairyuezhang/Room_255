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


  function musicFade() {
    $(".musicNote").fadeOut(100);
    miCount=0;
    reCount=0;
    doCount=0;
  }

    var miCount = 0;
    $("#pearl1").click(function () {
      var miArray = [function () {
        $("#3-1").fadeIn(100);
      }, function () {
        if($("#2-2").is(":visible")){
          $("#3-2").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-2").is(":visible")){
          $("#3-3").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-3").is(":visible")){
          $("#3-4").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-5").is(":visible")){
          $("#3-5").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-5").is(":visible")){
          $("#3-6").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-6").is(":visible")){
          $("#3-7").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-7").is(":visible")){
          $("#3-8").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-7").is(":visible")){
          $("#3-9").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-9").is(":visible")){
          $("#3-10").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-10").is(":visible")){
          $("#3-11").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-9").is(":visible")){
          $("#3-12").fadeIn(100);
        }else{
          musicFade();
        }
      }];
      miArray[miCount++]();
    })

    var reCount = 0;
    $("#pearl6").click(function () {
      var miArray = [function () {
        if($("#3-1").is(":visible")){
          $("#2-1").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#1-1").is(":visible")){
          $("#2-2").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-4").is(":visible")){
          $("#2-3").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-3").is(":visible")){
          $("#2-4").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-4").is(":visible")){
          $("#2-5").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-8").is(":visible")){
          $("#2-6").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#1-2").is(":visible")){
          $("#2-7").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#1-3").is(":visible")){
          $("#2-8").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-8").is(":visible")){
          $("#2-9").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-12").is(":visible")){
          $("#2-10").fadeIn(100);
        }else{
          musicFade();
        }
      }];
      miArray[reCount++]();
    })

    var doCount = 0;
    $("#pearl3").click(function () {
      var miArray = [function () {
        if($("#2-1").is(":visible")){
          $("#1-1").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-6").is(":visible")){
          $("#1-2").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#3-11").is(":visible")){
          $("#1-3").fadeIn(100);
        }else{
          musicFade();
        }
      }, function () {
        if($("#2-10").is(":visible")){
          $("#1-4").fadeIn(100);
          setTimeout(function () {
            $("#alertPearl").fadeIn(1000);
          },1000)
        }else{
          musicFade();
        }
      }];
      miArray[doCount++]();
    })

    $("#pearl2").click(function () {
      musicFade();
    })

    $("#pearl4").click(function () {
      musicFade();
    })

    $("#pearl5").click(function () {
      musicFade();
    })

    $("#pearl7").click(function () {
      musicFade();
    })


    $("#alertPearl").click(function () {
      $(".pearlroom").fadeOut(2000);
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
