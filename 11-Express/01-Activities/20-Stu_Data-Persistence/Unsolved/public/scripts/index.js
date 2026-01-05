const userNameInput = document.getElementById('username');
const productInput = document.getElementById('product');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

const emptyForm = () => {
  userNameInput.value = '';
  productInput.value = '';
  reviewInput.value = '';
};

const postReview = async (review) => {
  const res = await fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  });

  // If server returns an error status, show the message
  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || `Request failed with status ${res.status}`);
  }

  const data = await res.json();
  console.log('Successful POST request:', data);
  emptyForm();
  return data;
};

reviewForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newReview = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Basic client-side validation
  if (!newReview.username || !newReview.product || !newReview.review) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  try {
    const data = await postReview(newReview);
    alert(`Saved! Review ID: ${data.body.review_id}`);
  } catch (err) {
    console.error(err);
    alert('Could not save your review. Check the console for details.');
  }
});
