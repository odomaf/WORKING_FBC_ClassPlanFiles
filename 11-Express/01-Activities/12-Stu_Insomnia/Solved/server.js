// server.js
const express = require('express');
const pulls = require('./db/repos.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">http://localhost:3001/api</a>'
  );
});

// Endpoint to return our own locally stored data
app.get('/api', (req, res) => {
  res.json(pulls);
});

app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});
