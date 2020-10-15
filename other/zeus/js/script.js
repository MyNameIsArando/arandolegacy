document.getElementById('volume').volume = 0.04; /* Music Volume */

$(document).ready(function(){
    $("#cover1").click(function(){
        $("#cover1").addClass("selected"); /* add border to clicked button */
        $("#cover2, #cover3, #cover4, #cover5").removeClass("selected"); /* Remove border from other buttons */
        $(".colour").css("color", "#627a94"); /* change colour */
        $(".colour").css("background-color", "#627a94");  /* change bg colour */
        $(".cover").css("background-image", "url('./img/cover.jpg')");  /* change image */
    });
});
$(document).ready(function(){
    $("#cover2").click(function(){
        $("#cover2").addClass("selected");
        $("#cover1, #cover3, #cover4, #cover5").removeClass("selected");
        $(".colour").css("color", "#736E6E");
        $(".colour").css("background-color", "#736E6E");
        $(".cover").css("background-image", "url('./img/cover2.jpg')");
    });
});
$(document).ready(function(){
    $("#cover3").click(function(){
        $("#cover3").addClass("selected");
        $("#cover1, #cover2, #cover4, #cover5").removeClass("selected");
        $(".colour").css("color", "#4A465A");
        $(".colour").css("background-color", "#4A465A");
        $(".cover").css("background-image", "url('./img/cover3.jpg')");
    });
});
$(document).ready(function(){
    $("#cover4").click(function(){
        $("#cover4").addClass("selected");
        $("#cover1, #cover2, #cover3, #cover5").removeClass("selected");
        $(".colour").css("color", "#9E5F5F");
        $(".colour").css("background-color", "#9E5F5F");
        $(".cover").css("background-image", "url('./img/cover4.jpg')");
    });
});
$(document).ready(function(){
    $("#cover5").click(function(){
        $("#cover5").addClass("selected");
        $("#cover1, #cover2, #cover3, #cover4").removeClass("selected");
        $(".colour").css("color", "#3B3B3D");
        $(".colour").css("background-color", "#3B3B3D");
        $(".cover").css("background-image", "url('./img/cover5.jpg')");
    });
});