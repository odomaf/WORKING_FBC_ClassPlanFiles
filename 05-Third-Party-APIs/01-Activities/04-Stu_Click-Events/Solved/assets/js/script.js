// 04-Ins — Password Generator (SOLVED)

// Correct selectors (IDs use #)
const $passwordBtn = $('#password-btn');
const $copyBtn = $('#copy-btn');
const $passwordDisplay = $('#password-display');
const $copyStatus = $('#copy-status');

// Returns a random visible ASCII character (demo-only; not crypto-secure)
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34); // 34..110 approx
}

// Builds a password string of length `len`
function passwordGenerator(len) {
  let password = '';
  for (let i = 0; i < len; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Single click generates a 15-character password
$passwordBtn.on('click', function () {
  const newPassword = passwordGenerator(15);
  $passwordDisplay.text(newPassword.trim());
  // Clear copy status if present
  $copyStatus.text('');
});

// Bonus: Copy to clipboard with small UX touch
$copyBtn.on('click', async function () {
  const text = $passwordDisplay.text().trim();
  if (!text || text === 'Password will go here...') {
    $copyStatus.text('Nothing to copy yet. Generate a password first.');
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    $copyStatus.text('Copied!');
  } catch (err) {
    $copyStatus.text('Copy failed. Select and copy manually.');
  }
});
