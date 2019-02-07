document.getElementById('jsVol').volume = 0.025;

$(".me").hide();
$(".pro").hide();
$(".so").hide();
$(".content").hide();
$(".wa").hide();
$(".mi").hide();
$(".subMenu").hide();

// The Start Animation for the site
$(document).ready(function() {
    setTimeout(function() {
        $("#avatar").toggleClass("avaBig");
        $(".content").toggle("slow");
    }, 1000);
});
// Allows for clicking back once the start animation finishes
$(document).ready(function(){
    $("#avatar").click(function(){
        $("#avatar").toggleClass("avaBig");
    });
});
// Keeps the display: inline-block;
$("#avatar").bind("click", function(){
    $(".content").toggle("slow");
    return false;
})

// SubMenu JS //
$("#subOpen").bind("click", function(){
    $(".subMenu").delay(500).slideToggle("slow");
    $(".menuCont").slideToggle("slow");
    return false;
})
$(document).ready(function(){
    $("#subClose").click(function(){
        $(".subMenu").animate({
            height: "toggle", opacity: "toggle",
        }, 580);
        $(".menuCont").delay(600).slideToggle("slow");
    });
});




////////// Sections JS //////////
//Me
$("#meOpen").bind("click", function(){
    $(".me").delay(500).slideToggle("slow");
    $(".menuCont").slideToggle("slow");
    return false;
})
$(document).ready(function(){
    $("#meClose").click(function(){
        $(".me").animate({
            height: "toggle", opacity: "toggle",
        }, 580);
        $(".menuCont").delay(600).slideToggle("slow");
    });
});

//Project
$("#proOpen").bind("click", function(){
    $(".pro").delay(500).slideToggle("slow");
    $(".menuCont").slideToggle("slow");
    return false;
})
$(document).ready(function(){
    $("#proClose").click(function(){
        $(".pro").animate({
            height: "toggle", opacity: "toggle",
        }, 580);
        $(".menuCont").delay(600).slideToggle("slow");
    });
});

//Social
$("#soOpen").bind("click", function(){
    $(".so").delay(500).slideToggle("slow");
    $(".menuCont").slideToggle("slow");
    return false;
})
$(document).ready(function(){
    $("#soClose").click(function(){
        $(".so").animate({
            height: "toggle", opacity: "toggle",
        }, 580);
        $(".menuCont").delay(600).slideToggle("slow");
    });
});

//Wallpaper
$("#waOpen").bind("click", function(){
    $(".wa").delay(500).slideToggle("slow");
    $(".menuCont").slideToggle("slow");
    return false;
})
$(document).ready(function(){
    $("#waClose").click(function(){
        $(".wa").animate({
            height: "toggle", opacity: "toggle",
        }, 580);
        $(".menuCont").delay(600).slideToggle("slow");
    });
});

//Misc
$("#miOpen").bind("click", function(){
    $(".mi").delay(500).slideToggle("slow");
    $(".menuCont").slideToggle("slow");
    return false;
})
$(document).ready(function(){
    $("#miClose").click(function(){
        $(".mi").animate({
            height: "toggle", opacity: "toggle",
        }, 580);
        $(".menuCont").delay(600).slideToggle("slow");
    });
});


// Mute/Unmute
$("#jsVol").prop('muted', false);

  $("#mute").click( function (){
    if( $("#jsVol").prop('muted') ) {
          $("#jsVol").prop('muted', false);
    } else {
      $("#jsVol").prop('muted', true);
    }
});
// Toggles Image
$(document).ready(function(){
    $("#mute").click(function(){
        $("#mute").toggleClass("unmute");
    });
});

// Not my code, https://codepen.io/blackjacques/pen/LLQKKJ //
var player = document.getElementById('jsVol'); // id for audio element
var duration; // Duration of audio clip
progressBar  = document.getElementById('progress-bar');
source       = document.getElementById('audioSource');

// Add a listener for the timeupdate event so we can update the progress bar
player.addEventListener('timeupdate', updateProgressBar, false);
			
// Update the progress bar
function updateProgressBar() {
// Work out how much of the media has played via the duration and currentTime parameters
var percentage = Math.floor((100 / player.duration) * player.currentTime);
// Update the progress bar's value
progressBar.value = percentage;
// Update the progress bar's text (for browsers that don't support the progress element)
progressBar.innerHTML = progressBar.title = percentage + '% played';
}
        
function resetPlayer() {
progressBar.value = 0;
//clear the current song
player.src = '';
// Move the media back to the start
player.currentTime = 0;
// Set the play/pause button to 'play'
changeButtonType(btnPlayPause, 'play');
}

// Input Misc
function testing() {
    var x = document.getElementById("jsInput").value;
    document.getElementById("jsInput-text").innerHTML = "Uh " + x;
  }