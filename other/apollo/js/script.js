// Lower Music Volume /////////////////////////////////
document.getElementById('jsPlay').volume = 0.05;

// Play-Pause Toggle /////////////////////////////////
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
        $(".cred").toggleClass("credShow");
    });
});

// Arrows, Open/Close side Divs /////////////////////////////////
$(document).ready(function(){
  $(".left").click(function(){
    $(".left").toggleClass("flip");
    $(".west").toggleClass("shadow");
    $(".west").animate({width: 'toggle' });
  });
});
$(document).ready(function(){
  $(".right").click(function(){
    $(".right").toggleClass("flip");
    $(".east").toggleClass("shadow");
    $(".east").animate({width: 'toggle'});
  });
});

// Status /////////////////////////////////
$("#contents").load("status.txt");

if (screen.width <= 699) {
  document.location = "mobile.html";
}

// Date /////////////////////////////////
now = new Date();
d = now.getDate();
m = now.getMonth();
y = now.getFullYear();


out_string = y + '-' + m + '-' + d;

document.getElementById('date').innerHTML = out_string;

// Time /////////////////////////////////
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

// Uptime /////////////////////////////////
var count = 0;
window.setInterval(
function nigmode() {
  count = count + 1;
  document.getElementById('uptime').innerHTML = "Uptime: " + count + "s";
}, 1000);