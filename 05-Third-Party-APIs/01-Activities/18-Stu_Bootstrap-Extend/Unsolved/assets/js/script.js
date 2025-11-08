// TODO: Select the form, name input, comment input, and display area using jQuery
const formEl = $('#guestbook-form');
const nameInputEl = $('#name-input');
const commentInputEl = $('#comment-input');
const guestBookDisplayEl = $('#guest-book-display');

// This function prints the guest data to the page
const printGuestData = function (name, comment) {
  // Create a column and card element
  const cardColumnEl = $('<div>');
  cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

  const cardEl = $('<div>');
  // TODO: Add a custom class to change the card colors later in CSS
  cardEl.addClass('card h-100');
  cardEl.appendTo(cardColumnEl);

  const cardName = $('<h5>').addClass('card-header').text(name);
  cardName.appendTo(cardEl);

  const cardBodyEl = $('<div>').addClass('card-body').appendTo(cardEl);
  $('<p>').addClass('card-text').text(comment).appendTo(cardBodyEl);

  guestBookDisplayEl.append(cardColumnEl);
};

// This function handles form submission
const handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = nameInputEl.val().trim();
  const commentInput = commentInputEl.val().trim();

  if (!nameInput || !commentInput) {
    console.log('Please fill out both fields before submitting!');
    return;
  }

  printGuestData(nameInput, commentInput);

  // Reset form fields
  nameInputEl.val('');
  commentInputEl.val('');
};

// TODO: Add the event listener for form submission
formEl.on('submit', handleFormSubmit);
