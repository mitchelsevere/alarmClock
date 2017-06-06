var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

var hours, mins, tod;

var sound = new Audio("alarm.mp3");

function getValues() {
    startTime();
    hours = document.getElementById("hours").value;
    mins = document.getElementById("mins").value;
    tod = document.getElementById("tod").value;
    alert('You alarm has been set!');
    console.log(hours, mins, tod);

    if (hours == h && mins == m && tod == timeOfDay) {
        sound.play();
    }
}

function startTime() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    h = checkHours(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s + " " + timeOfDay;
    var t = setTimeout(startTime, 500);
	}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }  
    return i;
}

function checkHours(x) {
    if (x > 12) {
        timeOfDay = "PM"
        x = x - 12;
    } else if (x === 12) {
        timeOfDay = "PM"
    } else {
        timeOfDay = "AM"
    }
    return x;
}

function zeroNum() {
    mins = document.getElementById("mins");
   if (parseInt(mins.value, 10) < 10) {
    mins.value = '0' + mins.value;
   }
}
   

