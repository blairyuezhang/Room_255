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
        $("#avocadoW").fadeOut(0);
        $("#avocadoshape").fadeOut(100);
        $("#avocado").fadeIn(1000);
        $("#avocadoinput").fadeOut(100);
        $("#avocadoenter").fadeOut(100);
        setTimeout(function () {
          $(".avocado").fadeOut(2000);
        },3000)
      }
      $("#avocadoenter").click(function(){
        $("#avocadoW").fadeOut(0);
        $("#avocadoshape").fadeOut(100);
        $("#avocado").fadeIn(1000);
        $("#avocadoinput").fadeOut(100);
        $("#avocadoenter").fadeOut(100);
        setTimeout(function () {
          $(".avocado").fadeOut(2000);
        },3000)
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
        $("#alertMouthW").fadeOut(0);
        setTimeout(function(){
          $(".mouth").fadeOut(2000);
        },1000)
      }
      $("#mouthenter").click(function(){
        $("#alertMouthW").fadeOut(0);
        setTimeout(function(){
          $(".mouth").fadeOut(2000);
        },1000)
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


var container1Click = 1;

$("#container1").click(function(){
  container1Click++;
  console.log(container1Click);
  if (container1Click==1) {
    $("#container1").fadeTo("slow", 0.8);
  }else if (container1Click==2) {
    $("#container1").fadeTo("slow", 0.6);
  }else if (container1Click==3) {
    $("#container1").fadeTo("slow", 0.3);
  }else if (container1Click==4) {
    $("#container1").fadeOut();
  }
});

var container2Click = 1;

$("#container2").click(function(){
  container2Click++;
  if (container2Click==1) {
    $("#container2").fadeTo("slow", 0.8);
  }else if (container2Click==2) {
    $("#container2").fadeTo("slow", 0.6);
  }else if (container2Click==3) {
    $("#container2").fadeTo("slow", 0.3);
  }else if (container2Click==4) {
    $("#container2").fadeOut();
  }
});

var container3Click = 1;

$("#container3").click(function(){
  container3Click++;
  if (container3Click==1) {
    $("#container3").fadeTo("slow", 0.8);
  }else if (container3Click==2) {
    $("#container3").fadeTo("slow", 0.6);
  }else if (container3Click==3) {
    $("#container3").fadeTo("slow", 0.3);
  }else if (container3Click==4) {
    $("#container3").fadeOut();
  }
});

var container4Click = 1;

$("#container4").click(function(){
  container4Click++;
  if (container4Click==1) {
    $("#container4").fadeTo("slow", 0.8);
  }else if (container4Click==2) {
    $("#container4").fadeTo("slow", 0.6);
  }else if (container4Click==3) {
    $("#container4").fadeTo("slow", 0.3);
  }else if (container4Click==4) {
    $("#container4").fadeOut();
  }
});

var container5Click = 1;

$("#container5").click(function(){
  container5Click++;
  if (container5Click==1) {
    $("#container5").fadeTo("slow", 0.8);
  }else if (container5Click==2) {
    $("#container5").fadeTo("slow", 0.6);
  }else if (container5Click==3) {
    $("#container5").fadeTo("slow", 0.3);
  }else if (container5Click==4) {
    $("#container5").fadeOut();
  }
});

var container6Click = 1;

$("#container6").click(function(){
  container6Click++;
  if (container6Click==1) {
    $("#container6").fadeTo("slow", 0.8);
  }else if (container6Click==2) {
    $("#container6").fadeTo("slow", 0.6);
  }else if (container6Click==3) {
    $("#container6").fadeTo("slow", 0.3);
  }else if (container6Click==4) {
    $("#container6").fadeOut();
  }
});

var container7Click = 1;

$("#container7").click(function(){
  container7Click++;
  if (container7Click==1) {
    $("#container7").fadeTo("slow", 0.8);
  }else if (container7Click==2) {
    $("#container7").fadeTo("slow", 0.6);
  }else if (container7Click==3) {
    $("#container7").fadeTo("slow", 0.3);
  }else if (container7Click==4) {
    $("#container7").fadeOut();
  }
});


var objectcon1Click = 1;

$("#contain1").click(function(){
  objectcon1Click++;
  if (objectcon1Click==1) {
    $("#contain1").fadeTo("slow", 0.8);
  }else if (objectcon1Click==2) {
    $("#contain1").fadeTo("slow", 0.6);
  }else if (objectcon1Click==3) {
    $("#contain1").fadeTo("slow", 0.3);
  }else if (objectcon1Click==4) {
    $("#contain1").fadeOut();
  }
});

var objectcon2Click = 1;

$("#contain2").click(function(){
  objectcon2Click++;
  if (objectcon2Click==1) {
    $("#contain2").fadeTo("slow", 0.8);
  }else if (objectcon2Click==2) {
    $("#contain2").fadeTo("slow", 0.6);
  }else if (objectcon2Click==3) {
    $("#contain2").fadeTo("slow", 0.3);
  }else if (objectcon2Click==4) {
    $("#contain2").fadeOut();
  }
});

var objectcon3Click = 1;

$("#contain3").click(function(){
  objectcon3Click++;
  if (objectcon3Click==1) {
    $("#contain3").fadeTo("slow", 0.8);
  }else if (objectcon3Click==2) {
    $("#contain3").fadeTo("slow", 0.6);
  }else if (objectcon3Click==3) {
    $("#contain3").fadeTo("slow", 0.3);
  }else if (objectcon3Click==4) {
    $("#contain3").fadeOut();
  }
});

var objectcon4Click = 1;

$("#contain4").click(function(){
  objectcon4Click++;
  if (objectcon4Click==1) {
    $("#contain4").fadeTo("slow", 0.8);
  }else if (objectcon4Click==2) {
    $("#contain4").fadeTo("slow", 0.6);
  }else if (objectcon4Click==3) {
    $("#contain4").fadeTo("slow", 0.3);
  }else if (objectcon4Click==4) {
    $("#contain4").fadeOut();
  }
});

var objectcon5Click = 1;

$("#contain5").click(function(){
  objectcon5Click++;
  if (objectcon5Click==1) {
    $("#contain5").fadeTo("slow", 0.8);
  }else if (objectcon5Click==2) {
    $("#contain5").fadeTo("slow", 0.6);
  }else if (objectcon5Click==3) {
    $("#contain5").fadeTo("slow", 0.3);
  }else if (objectcon5Click==4) {
    $("#contain5").fadeOut();
  }
});

$("#iceenter").click(function () {
  if($(".icecontainer").is(":hidden")) {
    $(".iceroom").fadeOut(2000);
    console.log("hello");
    }else{
    $("#alertMouthW").fadeIn(100);
    setTimeout(function () {
      $("#alertMouthW").fadeOut(100);
    },2500)
    console.log("no");
    }


});




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



$("#bodyinput").keyup(function(){
  if(this.value == "whistle" || this.value=="WHISTLE" || this.value=="Whistle"){
    if(event.keyCode == 13) {
      $("#alertMouthW").fadeOut(0);
      $(".bodyfade1").fadeOut(100);
      $(".bodyfade2").fadeIn(4000);
      playwhistle();
    }
    $("#bodyenter1").click(function(){
      $("#alertMouthW").fadeOut(0);
      $(".bodyfade1").fadeOut(100);
      $(".bodyfade2").fadeIn(4000);
      playwhistle();
    })
  }else{
    if(event.keyCode == 13) {
      $("#alertMouthW").fadeIn(100);
    }
    $("#bodyenter1").click(function(){
      $("#alertMouthW").fadeIn(100);
    })
    setTimeout(function () {
      $("#alertMouthW").fadeOut(100);
    },2500)
}
})

$("#bodyinput2").keyup(function(){
  if(this.value == "kill bill" || this.value=="KILL BILL" || this.value=="Kill Bill"){
    if(event.keyCode == 13) {
      $("#alertMouthW").fadeOut(0);
      $(".bodyfade2").fadeOut(100);
      setTimeout(function () {
        $("#bodydance").fadeIn(2000);
      },500)
      setTimeout(function () {
        $("#ending").fadeIn(2000);
      },7000)
    }
    $("#bodyenter2").click(function(){
      $("#alertMouthW").fadeOut(0);
      $(".bodyfade2").fadeOut(100);
      setTimeout(function () {
        $("#bodydance").fadeIn(2000);
      },1000)
      setTimeout(function () {
        $("#ending").fadeIn(2000);
      },500)
    })
  }else{
    if(event.keyCode == 13) {
      $("#alertMouthW").fadeIn(100);
    }
    $("#bodyenter2").click(function(){
      $("#alertMouthW").fadeIn(100);
    })
    setTimeout(function () {
      $("#alertMouthW").fadeOut(100);
    },2500)
}
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

function playwhistle(){
  var songwhistle = document.getElementById("whistlesong");
  songwhistle.play();
}
