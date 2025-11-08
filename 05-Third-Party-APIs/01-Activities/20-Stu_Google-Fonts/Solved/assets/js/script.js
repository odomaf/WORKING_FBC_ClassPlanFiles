const formEl = $('#guestbook-form');
const nameInputEl = $('#name-input');
const commentInputEl = $('#comment-input');
const guestBookDisplayEl = $('#guest-book-display');

const printGuestData = (name, comment) => {
  const cardColumnEl = $('<div>').addClass('col-12 col-sm-6 col-md-4 col-lg-3 d-flex');
  const cardEl = $('<div>').addClass('card custom-card h-100 w-100').appendTo(cardColumnEl);

  $('<h5>').addClass('card-header custom-card-header').text(name).appendTo(cardEl);
  $('<p>').addClass('card-text p-3 mb-0').text(comment).appendTo(cardEl);

  guestBookDisplayEl.prepend(cardColumnEl);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const name = nameInputEl.val().trim();
  const comment = commentInputEl.val().trim();

  if (!name || !comment) return;

  printGuestData(name, comment);
  nameInputEl.val('');
  commentInputEl.val('');
};

formEl.on('submit', handleFormSubmit);
