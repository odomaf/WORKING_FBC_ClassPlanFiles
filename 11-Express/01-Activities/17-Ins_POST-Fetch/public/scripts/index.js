const usernameInput = document.getElementById('username');
const eventInput = document.getElementById('event');
const locationInput = document.getElementById('location');
const reviewInput = document.getElementById('review');
const ratingInput = document.getElementById('rating');
const reviewForm = document.getElementById('review-form');

// Helper to POST a new review
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
      console.log('POST success:', data);
      return data;
    })
    .catch((err) => console.error('POST error:', err));

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newReview = {
    username: usernameInput.value.trim(),
    eventName: eventInput.value.trim(),
    location: locationInput.value.trim(),
    review: reviewInput.value.trim(),
    rating: ratingInput.value ? Number(ratingInput.value) : null,
  };

  postReview(newReview).then((data) => {
    alert(`Review added! ID: ${data.body.review_id}`);
    reviewForm.reset();
  });
});
