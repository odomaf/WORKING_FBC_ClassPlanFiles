// 20-Stu_Data-Attributes — Solved

var container = document.querySelector('.container');

function toggleBox(element) {
  var state = element.getAttribute('data-state');

  if (state === 'hidden') {
    // Show number
    element.textContent = element.dataset.number;
    // Update state and a11y
    element.dataset.state = 'visible';
    element.setAttribute('aria-pressed', 'true');
    element.setAttribute('aria-label', 'Number ' + element.dataset.number + ' shown');
  } else {
    // Hide number
    element.textContent = '';
    element.setAttribute('data-state', 'hidden');
    element.setAttribute('aria-pressed', 'false');
    element.setAttribute('aria-label', 'Hidden number');
  }
}

// Click to toggle
container.addEventListener('click', function (event) {
  var el = event.target;
  if (el && el.matches('.box')) {
    toggleBox(el);
  }
});

// Keyboard (Enter/Space) to toggle — accessibility
container.addEventListener('keydown', function (event) {
  var el = event.target;
  if (!el || !el.matches('.box')) return;

  var key = event.key || event.keyCode;

  // Support both modern and legacy checks
  var isEnter = key === 'Enter' || key === 13;
  var isSpace = key === ' ' || key === 'Spacebar' || key === 32;

  if (isEnter || isSpace) {
    event.preventDefault(); // prevent page scroll on Space
    toggleBox(el);
  }
});
