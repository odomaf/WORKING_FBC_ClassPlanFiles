// 09-Ins_Event-Delegation

const displayEl = $('#display');
const showLettersBtnEl = $('#show-letters-btn');
const buttonListEl = $('#buttons');
const clearEl = $('#clear');

// Hide Clear button on page load
toggleClearVisibility();

// Letter data source
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_'.split('');

function renderLetters() {
  // prevent duplicate rendering
  if (buttonListEl.children().length) return;

  for (const letter of LETTERS) {
    const $btn = $('<button>', {
      type: 'button',
      class: 'letter-button btn btn-info',
      'data-letter': letter,
      text: letter,
    });
    buttonListEl.append($btn);
  }
}

// 🔹 Event Delegation: listen on #buttons, handle clicks on .letter-button
buttonListEl.on('click', '.letter-button', function () {
  const raw = $(this).data('letter');
  const char = raw === '_' ? '_' : raw; //Ternary Operator
  const $tile = $('<div>', { class: 'letter', text: char });
  displayEl.append($tile);
  toggleClearVisibility();
});

// Render letters when "Show Letters" is clicked
showLettersBtnEl.on('click', () => {
  renderLetters();
  showLettersBtnEl.hide();
  toggleClearVisibility();
});

// Clear the board
clearEl.on('click', () => {
  displayEl.empty();
  toggleClearVisibility();
});

function toggleClearVisibility() {
  clearEl.toggle(displayEl.text().length > 0);
}
