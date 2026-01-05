const usernameInput = document.getElementById('username');
const eventInput = document.getElementById('eventName');
const locationInput = document.getElementById('location');
const reviewInput = document.getElementById('review');
const ratingInput = document.getElementById('rating');
const reviewForm = document.getElementById('review-form');

// TODO: Add comments explaining what this helper does and what fetch() needs
const postReview = (reviewData) =>
  fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

// TODO: Add comments explaining what happens on submit
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newReview = {
    username: usernameInput.value.trim(),
    eventName: eventInput.value.trim(),
    location: locationInput.value.trim(),
    review: reviewInput.value.trim(),
    rating: ratingInput.value ? Number(ratingInput.value) : null,
  };

  postReview(newReview)
    .then((data) => alert(`Review added! Review ID: ${data.body.review_id}`))
    .catch((err) => console.error(err));
});
