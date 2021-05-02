function clock() {
  const date = new Date();
  var hours = date.getHours() % 12 || 12; //12 hour clock
  var mins = date.getMinutes();
  var secs = date.getSeconds();

//adds a 0 if less than 10
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

//get elements form HTML
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minutes').innerHTML = ":" + mins;
  document.getElementById('seconds').innerHTML = ":" + secs;

}

//clock seconds
setInterval(clock, 1000);
