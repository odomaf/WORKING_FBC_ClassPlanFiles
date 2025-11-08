// 05-Ins — Form Elements (SOLVED)
const $form = $('#pizza-form');
const $first = $('input[name="first-name"]');
const $last = $('input[name="last-name"]');
const $email = $('input[name="email"]');
const $github = $('input[name="github"]');
const $status = $('#status');
const $result = $('#result');
const $resultCard = $('#result-card');
const $submitBtn = $('#submit-btn');

// Basic email pattern validation just to demo client-side checks
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function serializeCheckedToppings() {
  const selected = [];
  $('input[type="checkbox"]:checked').each(function () {
    selected.push($(this).val());
  });
  return selected;
}

function handleFormSubmit(e) {
  e.preventDefault();

  // Grab & trim values (erase spaces from left and right side)
  const first = $first.val().trim();
  const last = $last.val().trim();
  const email = $email.val().trim();
  const github = $github.val().trim();
  const toppings = serializeCheckedToppings();

  // Minimal validation
  const errors = [];
  if (!first) errors.push('First name is required.');
  if (!last) errors.push('Last name is required.');
  if (!email) errors.push('Email is required.');
  if (email && !EMAIL_RE.test(email)) errors.push('Please provide a valid email.');

  if (errors.length) {
    $status.text(errors.join(' '));
    alert(errors.join('\n'));
    return;
  }

  // Demo: disable submit briefly to show good UX
  $submitBtn.prop('disabled', true);

  // Print to console (as in your original) …
  console.log('First Name:', first);
  console.log('Last Name:', last);
  console.log('Email:', email);
  console.log('GitHub:', github);
  console.log('Toppings:', toppings.join(', '));

  // …and show on page
  const payload = {
    first,
    last,
    email,
    github,
    toppings,
    submittedAt: new Date().toLocaleString(),
  };

  $result.text(JSON.stringify(payload, null, 2));
  $resultCard.prop('hidden', false);
  $status.text('Form submitted.');

  // Clear inputs & checkboxes
  $form.find('input[type="text"]').val('');
  $form.find('input[type="email"]').val('');
  $form.find('input[type="checkbox"]').prop('checked', false);

  // Re-enable after short delay
  setTimeout(function () {
    $submitBtn.prop('disabled', false), 400
  });
}

$form.on('submit', handleFormSubmit);
