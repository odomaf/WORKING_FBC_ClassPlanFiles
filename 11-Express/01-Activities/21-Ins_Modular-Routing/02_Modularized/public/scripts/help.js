const helpForm = document.getElementById('feedback-form');

helpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const messageEl = document.getElementById('requestText');
  const emailEl = document.getElementById('requestEmail');

  const newRequest = {
    email: emailEl.value.trim() || 'anonymous',
    topic: 'General',
    message: messageEl.value.trim(),
  };

  if (!newRequest.message) {
    alert('Please describe what you need help with.');
    return;
  }

  fetch('/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRequest),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.status);
      messageEl.value = '';
      emailEl.value = '';
    })
    .catch((error) => console.error('Error:', error));
});
