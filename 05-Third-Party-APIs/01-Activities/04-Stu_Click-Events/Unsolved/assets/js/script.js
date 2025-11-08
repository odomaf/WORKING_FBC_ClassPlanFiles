// 04-Stu — Password Generator (UNSOLVED)
// Goal: Single-click should generate a 15-character password into #password-display

// TODO 1: Fix the selector so it targets the button with **ID** "password-btn"
// (Right now it's using a class selector for .password-btn, but the HTML uses an ID.)
const $passwordBtn = $('.password-btn');
const $passwordDisplay = $('#password-display');

// Returns a random visible ASCII character (roughly punctuation/numbers/letters)
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Builds a password string of length `len`
function passwordGenerator(len) {
  let password = '';
  for (let i = 0; i < len; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// TODO 2: Listen for a **single click** instead of a double click
// TODO 3: Generate a **15-character** password (not 12)
$passwordBtn.on('dblclick', function () {
  const newPassword = passwordGenerator(12);
  $passwordDisplay.text(newPassword.trim());
});
