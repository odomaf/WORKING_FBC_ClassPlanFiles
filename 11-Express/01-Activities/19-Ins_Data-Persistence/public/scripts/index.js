const userNameInput = document.getElementById('username');
const productInput = document.getElementById('product');
const reviewInput = document.getElementById('review');
const reviewForm = document.getElementById('review-form');

// Helper: send feedback to server
async function postFeedback(feedback) {
  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback),
    });

    if (!res.ok) {
      const message = await res.text();
      throw new Error(message || `Request failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log('Successful POST request:', data);
    return data;
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error;
  }
}

// Submit handler
reviewForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newFeedback = {
    username: userNameInput.value.trim(),
    product: productInput.value.trim(),
    review: reviewInput.value.trim(),
  };

  // Basic client-side validation
  if (!newFeedback.username || !newFeedback.product || !newFeedback.review) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  try {
    const data = await postFeedback(newFeedback);
    alert(`Feedback saved! ID: ${data.body.id}`);

    // Optional: clear fields after submit
    userNameInput.value = '';
    productInput.value = '';
    reviewInput.value = '';
  } catch (err) {
    alert('Something went wrong saving feedback. Check the console.');
  }
});
