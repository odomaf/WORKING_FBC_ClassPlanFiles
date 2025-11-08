// 10-Stu_Event-Delegation

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

  const $li = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark"></li>'
  );

  const $text = $('<span>').text(shoppingItem);

  const $deleteBtn = $('<button>', {
    class: 'btn btn-danger btn-small delete-item-btn',
    type: 'button',
    text: 'Remove',
    'aria-label': `Remove ${shoppingItem}`,
  });

  $li.append($text, $deleteBtn);
  shoppingListEl.append($li);

  $('input[name="shopping-input"]').val('').focus();
}

function handleRemoveItem(event) {
  const $btn = $(event.target);
  $btn.closest('li').remove(); // robust vs parent('li')
}

// Event delegation: listen on the UL, handle clicks on future .delete-item-btn nodes
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
shoppingFormEl.on('submit', handleFormSubmit);
