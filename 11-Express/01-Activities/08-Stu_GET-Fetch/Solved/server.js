const express = require('express');
const path = require('path');
const petData = require('./db/animals.json');

const app = express();
const PORT = 3001;

// Serve static assets from /public (CSS, client JS, images, HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage correctly from /public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route
app.get('/api/pets', (req, res) => {
  res.json(petData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
