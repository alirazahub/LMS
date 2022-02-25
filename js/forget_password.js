$(document).ready(function() {
  var nice = $("html").niceScroll();  // The document page (body)
});



const month = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML = months[month.getMonth()];

const date = new Date();
document.getElementById("date").innerHTML = date.getDate();

const year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

// LIVE TIME
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

const day = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[day.getDay()];


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();