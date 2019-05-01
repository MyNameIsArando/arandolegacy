document.getElementById("vid").volume = 0.3;
function showVid() {
    var vid = document.getElementById("vid");
    if (vid.style.display === "none") {
        vid.style.display = "block";
        vid.play();
    } else {
        vid.style.display = "none";
        vid.pause();
    }
  }
  