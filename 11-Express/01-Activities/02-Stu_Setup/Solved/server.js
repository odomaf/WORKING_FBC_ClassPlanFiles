// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware: serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route: serve the Route Paths page
app.get('/paths', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'paths.html'));
});

// Route: serve the res.send() info page
app.get('/send', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'send.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
