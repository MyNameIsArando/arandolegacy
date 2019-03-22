// Lower Music Volume
document.getElementById('jsPlay').volume = 0.025;

// Mute Toggle
var music = document.getElementById("jsPlay");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    music.pause()
  } else {
    music.play();
  }
};
music.onplaying = function() {
  isPlaying = true;
};
music.onpause = function() {
  isPlaying = false;
};
$(document).ready(function(){
  $(".unmute").click(function(){
    $(".unmute").toggleClass("mute");
  });
});

// Arrows, Open/Close Divs
$(document).ready(function(){
  $(".left").click(function(){
    $(".west").slideToggle();
    $(".contentCenter").slideToggle();
  });
});
$(document).ready(function(){
  $("#westClose").click(function(){
    $(".west").slideToggle();
    $(".contentCenter").slideToggle();
  });
});

$(document).ready(function(){
  $(".right").click(function(){
    $(".east").slideToggle();
    $(".contentCenter").slideToggle();
  });
});
$(document).ready(function(){
  $("#eastClose").click(function(){
    $(".east").slideToggle();
    $(".contentCenter").slideToggle();
  });
});

// Status
$("#contents").load("status.txt");