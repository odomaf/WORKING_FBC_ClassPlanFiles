// 09-Ins_Timers-Intervals
// Demonstrates setInterval(), clearInterval(), and DOM updates with a Pexels image.

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion!";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "💥 Boom! Colorsplosion time!";
  var imgEl = document.createElement("img");

  // Colorful ink underwater from Pexels
  imgEl.setAttribute(
    "src",
    "https://images.pexels.com/photos/7676831/pexels-photo-7676831.jpeg?auto=compress&cs=tinysrgb&w=1200"
  );
  imgEl.setAttribute("alt", "Colorful ink flowing underwater in vibrant hues");
  mainEl.appendChild(imgEl);

  console.log("Timer complete — image appended.");
}

// Start the timer
setTime();
