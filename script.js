function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  document.getElementById("MyClockDisplay").style.color = "yellow";
  document.getElementById("MyClockDisplay").style.textShadow =
    "2px 1px 23px white";
  document.getElementById("MyClockDisplay").style.position = "absolute";
  document.getElementById("MyClockDisplay").style.top = "50%";
  document.getElementById("MyClockDisplay").style.left = "50%";
  document.getElementById("MyClockDisplay").style.fontFamily = "Orbitron";
  document.getElementById("MyClockDisplay").style.letterSpacing = "7px";
  document.getElementById("MyClockDisplay").style.fontSize = "80px";
  document.getElementById("MyClockDisplay").style.transform =
    "translateX(-50%) translateY(-50%)";

  setTimeout(showTime, 1000);
}
showTime();
