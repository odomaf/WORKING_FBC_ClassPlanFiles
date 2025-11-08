// 06-Stu_Form-Elements — Shopping List (UNSOLVED)

const $shoppingForm = $('#shopping-form');
const $shoppingList = $('#shopping-list');

function handleFormSubmit(event) {
    // TODO 1: Prevent the default submit behavior.

    // TODO 2: Read the input value from the element with name="shopping-input".
    // const itemText = ???

    // (Recommended) Trim whitespace
    // const text = itemText.trim();

    // TODO 3: If empty after trimming, log a message and return early.
    // if (!text) { console.log('No shopping item filled out in form!'); return; }

    // TODO 4: Append a new <li> with the text to #shopping-list.
    // $shoppingList.append(`<li>${text}</li>`);

    // TODO 5: Clear the input field for the next entry.
    // $('input[name="shopping-input"]').val('');

    // (Bonus) Consider form.reset();
}

// Wire up the submit event on the form
$shoppingForm.on('submit', handleFormSubmit);
