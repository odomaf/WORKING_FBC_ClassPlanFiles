// 🎯 High-Low Number Guessing Game
// The player tries to guess a random number between 1 and 100 using only prompts and alerts.

function playHighLowGame() {
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100... Can you guess it?");

  // Generate a random number between 1 and 100
  const targetNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess = null;
  let keepPlaying = true;

  // Main game loop
  while (keepPlaying) {
    // Ask player for a number input
    guess = window.prompt("Enter your guess (1–100):");

    // If user presses cancel, exit the game
    if (guess === null) {
      window.alert("👋 Game canceled. Maybe next time!");
      return;
    }

    // Convert guess to a number
    guess = parseInt(guess.trim(), 10);

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      window.alert("⚠️ Please enter a valid number between 1 and 100.");
      continue;
    }

    attempts++;

    // Check the guess
    if (guess === targetNumber) {
      window.alert(`🎉 Correct! You guessed the number ${targetNumber} in ${attempts} attempts!`);
      // Ask if the player wants to play again
      keepPlaying = window.confirm("Would you like to play again?");
      if (keepPlaying) {
        // Restart the game
        playHighLowGame();
      } else {
        window.alert("Thanks for playing! 👋");
      }
      return; // Exit current game loop
    } else if (guess < targetNumber) {
      window.alert("📉 Too low! Try a higher number.");
    } else {
      window.alert("📈 Too high! Try a lower number.");
    }
  }
}

// 🚀 Start the game automatically
playHighLowGame();
