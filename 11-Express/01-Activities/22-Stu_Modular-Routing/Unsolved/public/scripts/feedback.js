const feedbackForm = document.getElementById('feedback-form');

// Handle when a user submits feedback
feedbackForm
  .addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the feedback text from the DOM and assign it to a variable
    const messageEl = document.getElementById('feedbackText');
    const emailEl = document.getElementById('feedbackUsername');

    const message = messageEl.value.trim();
    // Get the username text and add it to a variable
    const email = emailEl.value.trim() || 'anonymous';

    // Create an object with the username and feedback
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
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
        messageEl.value = '';
        emailEl.value = '';
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
