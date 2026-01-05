const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const message = document.getElementById('requestText').value.trim();
  const email = document.getElementById('requestEmail').value.trim() || 'anonymous';

  const newRequest = {
    email,
    requestType: 'General',
    message,
  };

  fetch('/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRequest),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(data.status || 'Request submitted!');
      document.getElementById('requestText').value = '';
      document.getElementById('requestEmail').value = '';
    })
    .catch((error) => console.error('Error:', error));
});
