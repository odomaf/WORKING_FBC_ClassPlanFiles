// server.js (07-Ins-GET-Fetch — Instructor Demo)
const express = require('express');
const path = require('path');

// Local “database” (JSON file)
const termData = require('./db/terms.json');

const app = express();
const PORT = 3001;

// Serve static assets (CSS, client JS, images) from /public
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint: return all terms as JSON
app.get('/api/terms', (req, res) => {
  res.json(termData);
});

app.listen(PORT, () => {
  console.log(`Instructor demo running at http://localhost:${PORT}`);
});
