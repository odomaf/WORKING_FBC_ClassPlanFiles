// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve anything inside /public automatically (CSS, images, HTML, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Home route: serve index.html (instead of a plain text message)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route demo: shows an explanation page
app.get('/lab/routes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'routes.html'));
});

// sendFile demo: shows a page served from the server
app.get('/lab/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sendFile.html'));
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
