const feedbackForm = document.getElementById('feedback-form');

// Handle when a user submits a help request
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const messageEl = document.getElementById('feedbackText');
  const emailEl = document.getElementById('feedbackUsername');

  const message = messageEl.value.trim();
  const email = emailEl.value.trim() || 'anonymous';

  if (!message) {
    alert('Please describe what you need help with.');
    return;
  }

  const newRequest = {
    email,
    topic: 'General',
    message,
  };

  // Fetch POST request to the server
  fetch('/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRequest),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.status);
      messageEl.value = '';
      emailEl.value = '';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
