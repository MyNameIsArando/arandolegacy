// Time | big shoutout to zwei //
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
        if (seconds < 10){
            seconds = "0" + seconds
        }
        if (minutes < 10){
            minutes = "0" + minutes
        }
        var t_str = hours + ":" + minutes + ":" + seconds;
        if(hours > 11){
            t_str += "";
        } else {
            t_str += "";
        }
        document.getElementById('time_span').innerHTML = t_str;
    }
    setInterval(updateTime, 1000);
    
    // Date //
    var dt = new Date();
    document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear());
    
    // Audio Volume //
    document.getElementById("volumedown").volume = 0.07;