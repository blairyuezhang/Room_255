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

              if (rotations==50){
              $("#enter").click(function(){
                $("#alertThink").fadeOut(0);
                setTimeout(function () {
                  $(".bikeroom").fadeOut(2000);
                },1000)
              })
            }else {
              $("#enter").click(function(){
              $("#alertThink").fadeIn(0);
              setTimeout(function () {
                $("#alertThink").fadeOut(100);
              },2500)
              })
            }


        $("#rotationsno").html("7 + 7 &divide 7 + 7 &times 7 - 7 = "+rotations);
    }
  });

  $("#avocadoinput").keyup(function(){
    if(this.value == "avocado" || this.value=="AVOCADO" || this.value=="Avocado"){
      if(event.keyCode == 13) {
        $("#avocadoshape").fadeOut(100);
        $("#avocado").fadeIn(1000);
        $("#avocadoinput").fadeOut(100);
        $("#avocadoenter").fadeOut(100);
        setTimeout(function () {
          $(".avocado").fadeOut(2000);
        },3000)
      }
      $("#avocadoenter").click(function(){
        $("#avocadoshape").fadeOut(100);
        $("#avocado").fadeIn(1000);
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


  $("#mouthanswer").keyup(function(){
    if(this.value == "echo" || this.value=="ECHO" || this.value=="Echo"){
      if(event.keyCode == 13) {
        setTimeout(function(){
          $(".mouth").fadeOut(2000);
        },1000)
      }
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
            $(".pearlroom").fadeOut(2000);
          },2000)
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







})

function hideice2() {
  $("#ice_2c").fadeOut();
}

$("#ice_2c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice2
});

function hideice1() {
  $("#ice_1c").fadeOut();
}

$("#ice_1c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice1
});

function hideice3() {
  $("#ice_3c").fadeOut();
}

$("#ice_3c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice3
});

function hideice4() {
  $("#ice_4c").fadeOut();
}

$("#ice_4c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice4
});

function hideice5() {
  $("#ice_5c").fadeOut();
}

$("#ice_5c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice5
});

function hideice6() {
  $("#ice_6c").fadeOut();
}

$("#ice_6c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice6
});

function hideice7() {
  $("#ice_7c").fadeOut();
}

$("#ice_7c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideice7
});

function hideicen1() {
  $("#ice_n1c").fadeOut();
}

$("#ice_n1c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideicen1
});

function hideicen2() {
  $("#ice_n2c").fadeOut();
}

$("#ice_n2c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideicen2
});

function hideicen3() {
  $("#ice_n3c").fadeOut();
}

$("#ice_n3c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideicen3
});

function hideicen4() {
  $("#ice_n4c").fadeOut();
}

$("#ice_n4c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideicen4
});

function hideicen5() {
  $("#ice_n5c").fadeOut();
}

$("#ice_n5c").eraser({
  size: 20,
  completeRatio: .7,
  completeFunction: hideicen5
});


$("#iceenter").click(function () {
  if($(".icecontainer").is(":hidden")) {
    $(".iceroom").fadeOut(2000);
    console.log("hello");
    setTimeout(function () {
      $("#ending").fadeIn(2000);
    },4000)
    }else{
    console.log("no");
  }

})


$(".icecontainer").on("mouseover", function() {
  $("#iceglow").fadeIn();
})

$(".icecontainer").on("mouseout", function() {
  $("#iceglow").fadeOut();
})

$(".icencontainer").on("mouseover", function() {
  $("#iceglow").fadeIn();
})

$(".icencontainer").on("mouseout", function() {
  $("#iceglow").fadeOut();
})















function playdo() {
  var sounddo = document.getElementById("do");
  sounddo.currentTime=0;
  sounddo.play();
}

function playre() {
  var soundre = document.getElementById("re");
  soundre.currentTime=0;
  soundre.play();
}

function playmi() {
  var soundmi = document.getElementById("mi");
  soundmi.currentTime=0;
  soundmi.play();
}

function playfa() {
  var soundfa = document.getElementById("fa");
  soundfa.currentTime=0;
  soundfa.play();
}

function playsol() {
  var soundsol = document.getElementById("sol");
  soundsol.currentTime=0;
  soundsol.play();
}

function playla() {
  var soundla = document.getElementById("la");
  soundla.currentTime=0;
  soundla.play();
}

function playsi() {
  var soundsi = document.getElementById("si");
  soundsi.currentTime=0;
  soundsi.volume = 0.2;
  soundsi.play();
}
