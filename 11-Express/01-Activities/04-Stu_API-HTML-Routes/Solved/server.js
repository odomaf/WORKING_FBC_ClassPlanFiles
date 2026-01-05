// server.js (SOLVED REFERENCE)

const express = require('express');

// Load JSON data from file
const termData = require('./terms.json');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Visit http://localhost:3001/api to view JSON data.');
});

app.get('/api', (req, res) => {
  res.json(termData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
