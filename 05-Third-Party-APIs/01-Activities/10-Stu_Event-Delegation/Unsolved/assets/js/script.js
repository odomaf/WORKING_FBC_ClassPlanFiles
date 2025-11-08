// 10-Stu_Event-Delegation — Student STARTER

const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  const raw = $('input[name="shopping-input"]').val();
  const shoppingItem = (raw || '').trim();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // Create <li> with text + Remove button
  const $li = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark"></li>'
  );
  const $text = $('<span>').text(shoppingItem);
  const $btn = $('<button>', {
    class: 'btn btn-danger btn-small delete-item-btn',
    type: 'button',
    text: 'Remove',
    'aria-label': `Remove ${shoppingItem}`,
  });

  $li.append($text, $btn);
  shoppingListEl.append($li);

  // Clear input
  $('input[name="shopping-input"]').val('').focus();
}

// TODO: Use event delegation on #shopping-list.
// When a ".delete-item-btn" is clicked, remove its corresponding <li>.
// Hint: $(event.target).closest('li').remove();

shoppingFormEl.on('submit', handleFormSubmit);
