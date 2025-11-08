const formEl = $('#guestbook-form');
const nameInputEl = $('#name-input');
const commentInputEl = $('#comment-input');
const guestBookDisplayEl = $('#guest-book-display');

const printGuestData = function (name, comment) {
  const cardColumnEl = $('<div>').addClass('col-12 col-sm-4 col-md-3');

  const cardEl = $('<div>').addClass('card h-100 custom-card').appendTo(cardColumnEl);

  $('<h5>')
    .addClass('card-header custom-card-header')
    .text(name)
    .appendTo(cardEl);

  const cardBodyEl = $('<div>').addClass('card-body').appendTo(cardEl);

  $('<p>')
    .addClass('card-text')
    .text(comment)
    .appendTo(cardBodyEl);

  guestBookDisplayEl.append(cardColumnEl);
};

const handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = nameInputEl.val().trim();
  const commentInput = commentInputEl.val().trim();

  if (!nameInput || !commentInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printGuestData(nameInput, commentInput);

  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
