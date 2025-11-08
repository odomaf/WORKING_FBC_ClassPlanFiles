// ======================================
// 22-Stu_Local-Storage (Solved)
// Demonstrates persisting user data safely with localStorage
// ======================================

// 1️⃣ Select all key DOM elements used in the app
// These match what students are told to grab in the Unsolved version
var nameInput = document.querySelector('#name');
var usernameInput = document.querySelector('#username');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userNameSpan = document.querySelector('#user-name');
var userUsernameSpan = document.querySelector('#user-username');

// 2️⃣ Call our render function when the page first loads
// This ensures we display any existing data from localStorage right away
renderLastRegistered();

/**
 * 🧭 displayMessage()
 * Helper function that shows visual feedback to the user.
 * - `type` can be "success" or "error"
 * - `message` is the text shown inside #msg
 */
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

/**
 * 🧱 renderLastRegistered()
 * Reads data from localStorage and updates the text on screen.
 * - If no data exists, shows "(none yet)" placeholders.
 * - If data exists, updates both spans with stored values.
 */
function renderLastRegistered() {
  var name = localStorage.getItem('name');
  var username = localStorage.getItem('username');

  // If nothing has been saved yet, show default placeholders
  if (!name || !username) {
    userNameSpan.textContent = '(none yet)';
    userUsernameSpan.textContent = '(none yet)';
    return;
  }

  // Otherwise, display saved values
  userNameSpan.textContent = name;
  userUsernameSpan.textContent = username;
}

/**
 * 🖱️ "Save Profile" button click event
 * Handles input validation, saving, and re-rendering.
 */
signUpButton.addEventListener('click', function (event) {
  // Prevents the page from reloading on form submission
  event.preventDefault();

  // Get trimmed input values to remove extra spaces
  var name = nameInput.value.trim();
  var username = usernameInput.value.trim();

  // 3️⃣ Validate user input and provide appropriate feedback
  if (name === '') {
    displayMessage('error', 'Name cannot be blank.');
  } else if (username === '') {
    displayMessage('error', 'Username cannot be blank.');
  } else {
    // If valid, display a success message
    displayMessage('success', 'Profile saved successfully!');

    // 4️⃣ Save the data using localStorage.setItem()
    // localStorage only stores strings, so no conversion is needed here
    localStorage.setItem('name', name);
    localStorage.setItem('username', username);

    // 5️⃣ Immediately update the display with the new info
    renderLastRegistered();

    // Optional: clear input fields after saving
    nameInput.value = '';
    usernameInput.value = '';
  }
});
