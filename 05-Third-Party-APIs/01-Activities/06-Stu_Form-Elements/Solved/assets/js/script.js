// 06-Ins_Form-Elements — Shopping List (SOLVED)

// Select key DOM elements
const $shoppingForm = $('#shopping-form');
const $shoppingList = $('#shopping-list');

// Form submit handler
function handleFormSubmit(event) {
  event.preventDefault(); // Stop page refresh

  // Get the input's value and trim whitespace
  const itemText = $('input[name="shopping-input"]').val().trim();

  // Guard clause: skip empty input
  if (!itemText) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // Append new list item with remove button
  const listItem = `
    <li>
      ${itemText}
      <button class="remove-btn" title="Remove item">❌</button>
    </li>
  `;
  $shoppingList.append(listItem);

  // Clear the input field
  $('input[name="shopping-input"]').val('');
}

// Remove item via event delegation
function handleRemoveClick(event) {
  if ($(event.target).hasClass('remove-btn')) {
    $(event.target).parent().remove();
  }
}

// Wire up event listeners
$shoppingForm.on('submit', handleFormSubmit);
$shoppingList.on('click', handleRemoveClick);
