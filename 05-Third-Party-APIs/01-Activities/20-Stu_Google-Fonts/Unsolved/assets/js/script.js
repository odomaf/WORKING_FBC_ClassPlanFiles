// 20-Stu_Google-Fonts
// Focus is on styling & fonts, so JS is provided.
// (Read through it to connect DOM + events.)

const formEl = $('#guestbook-form');
const nameInputEl = $('#name-input');
const commentInputEl = $('#comment-input');
const guestBookDisplayEl = $('#guest-book-display');

const printGuestData = (name, comment) => {
  const cardColumnEl = $('<div>').addClass(
    'col-12 col-sm-6 col-md-4 col-lg-3 d-flex'
  );

  const cardEl = $('<div>').addClass('card custom-card h-100 w-100');
  cardEl.appendTo(cardColumnEl);

  $('<h5>')
    .addClass('card-header custom-card-header mb-0')
    .text(name)
    .appendTo(cardEl);

  const cardBodyEl = $('<div>').addClass('card-body').appendTo(cardEl);

  $('<p>')
    .addClass('card-text mb-0')
    .text(comment)
    .appendTo(cardBodyEl);

  // Newest entries first
  guestBookDisplayEl.prepend(cardColumnEl);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const name = nameInputEl.val().trim();
  const comment = commentInputEl.val().trim();

  if (!name || !comment) {
    console.log('Please fill out both fields before submitting.');
    return;
  }

  printGuestData(name, comment);

  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
