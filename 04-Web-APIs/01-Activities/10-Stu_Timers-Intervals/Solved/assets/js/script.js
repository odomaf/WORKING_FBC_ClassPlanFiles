// 10-Stu_Timers-Intervals — Speed Reader
// Students explore using multiple intervals to control a countdown and timed word display.

var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var message =
  "Some say the world will end in 🔥, some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate, to say that for destruction ice is also great and would suffice.";

var words = message.split(" ");

// Countdown timer before reading begins
function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining...";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining...";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Display message words one at a time
function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
      timerEl.textContent = "✅ Done!";
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 400); // adjust speed (milliseconds per word)
}

// Start countdown on load
countdown();
