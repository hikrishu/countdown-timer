var days = document.querySelector("#days");
var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var currentYear = new Date().getFullYear();

var newYear = new Date(`January 01 ${currentYear+1} 00:00:00`);

// update countdown fuction

function updateCountdown(){
    var currentTime = new Date();
    var diff = newYear - currentTime;

    var d = Math.floor(diff/1000/60/60/24);
    var h = Math.floor(diff/1000/60/60) % 24;
    var m = Math.floor(diff/1000/60) % 60;
    var s = Math.floor(diff/1000) % 60;

    days.innerHTML = d < 10 ? '00' + d : d < 100 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

