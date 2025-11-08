// 🧠 Word Guess Game — Coding Edition

// Coding-related word list
const words = [
  "javascript",
  "variable",
  "function",
  "loop",
  "array",
  "object",
  "boolean",
  "string",
  "scope",
  "closure",
  "promise",
  "callback",
  "json",
  "class",
  "react"
];

// Randomly pick a word
let chosenWord = words[Math.floor(Math.random() * words.length)];

// Game state
let guessedLetters = [];
let attempts = 10;
let maskedWord = "";

// DOM references
const maskedWordEl = document.getElementById("maskedWord");
const attemptsEl = document.getElementById("attempts");
const guessedLettersEl = document.getElementById("guessedLetters");

// 🎮 Initialize Game
function initializeGame() {
  guessedLetters = [];
  attempts = 10;
  chosenWord = words[Math.floor(Math.random() * words.length)];
  updateMaskedWord();
  updateDisplay();
  console.log("Chosen word:", chosenWord); // For instructor demo
}

// 🧩 Update the masked word with underscores and revealed letters
function updateMaskedWord() {
  maskedWord = chosenWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  maskedWordEl.textContent = maskedWord;
}

// 🖥️ Update game display
function updateDisplay() {
  attemptsEl.textContent = attempts;
  guessedLettersEl.textContent = guessedLetters.length
    ? guessedLetters.join(", ").toUpperCase()
    : "None yet";
}

// 🧠 Handle player guess
function handleGuess(letter) {
  if (!/^[a-z]$/.test(letter)) return; // Ignore non-letter keys
  if (guessedLetters.includes(letter)) return; // Ignore duplicates

  guessedLetters.push(letter);

  if (chosenWord.includes(letter)) {
    updateMaskedWord();

    // 🎉 Check for win
    if (!maskedWord.includes("_")) {
      maskedWordEl.textContent = chosenWord
        .split("")
        .join(" ")
        .toUpperCase();
      setTimeout(() => {
        alert(`🎉 Congrats! You guessed the word "${chosenWord.toUpperCase()}"!`);
        initializeGame();
      }, 100);
    }
  } else {
    attempts--;
    updateDisplay();

    if (attempts === 0) {
      setTimeout(() => {
        alert(`💀 Game Over! The word was "${chosenWord.toUpperCase()}".`);
        initializeGame();
      }, 100);
    }
  }

  updateDisplay();
}

// ⌨️ Keyboard input listener
window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  handleGuess(key);
});

// 🚀 Start on load
initializeGame();
