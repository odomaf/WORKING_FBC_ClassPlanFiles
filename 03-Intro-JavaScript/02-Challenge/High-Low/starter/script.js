// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // TODO: Create a random number between 1 and 100 and store it in a variable called targetNumber
  // Example: const targetNumber = Math.floor(Math.random() * 100) + 1;

  // TODO: Create a variable to track how many guesses the player has made

  // Create a variable to store the player's current guess
  let guess = null;

  // TODO: Create a loop that keeps asking the player for a guess until they guess correctly
  // Use window.prompt() to ask for a number

  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  // 2️⃣ Check if the guess is too high, too low, or correct
  // 3️⃣ Use window.alert() to tell the player the result
  // 4️⃣ Count the number of attempts

  // TODO: When the player guesses correctly:
  // - Alert them that they won and show how many attempts it took
  // - Ask if they want to play again using window.confirm()
  // - If yes, call playHighLowGame() again
  // - If no, show a “Thanks for playing” message
}

// 🚀 Call the function to start the game
playHighLowGame();
