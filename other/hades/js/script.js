//Redirect to mobile site
if (screen.width <= 699) {
  document.location = "mobile.html";
}

// Start Animations
$(document).ready(function() {
    setTimeout(function() {
    $(".welcome").slideToggle("slow");
		$(".container").slideToggle("slow");
		$(".taskbarContainer").delay(600).slideToggle("slow");
    }, 2000); //Default value = 2000
});
/* $(document).ready(function() {
	setTimeout(function() {
	$(".welcome").slideToggle("slow");
	$(".container").slideToggle("slow");
	$(".taskbarContainer").delay(600).slideToggle("slow");
	}, 2000); //Default value = 2000
}); */


// Windows
$(document).ready(function(){
	$(".meButton").click(function(){
		$(".meWindow").fadeToggle("fast");
		$(".me1").toggleClass("active");
	});
});
$(document).ready(function(){
	$(".socialButton").click(function(){
		$(".socialWindow").fadeToggle("slow");
		$(".so1").toggleClass("active");
	});
});
$(document).ready(function(){
	$(".projectButton").click(function(){
		$(".projectWindow").fadeToggle("slow");
		$(".pro1").toggleClass("active");
	});
});

// Apps
$(document).ready(function(){
	$(".meMax").click(function(){
		$(".desktop").delay(350).fadeToggle("fast");
		$(".meApp").delay(500).fadeToggle("fast");
	});
});
$(document).ready(function(){
	$(".proMax").click(function(){
		$(".desktop").delay(350).fadeToggle("fast");
		$(".projectApp").delay(500).fadeToggle("fast");
	});
});
$(document).ready(function(){
	$(".soMax").click(function(){
		$(".desktop").delay(350).fadeToggle("fast");
		$(".socialApp").delay(500).fadeToggle("fast");
	});
});