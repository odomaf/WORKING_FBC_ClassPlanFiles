const express = require('express');
const termData = require('./terms.json');

const app = express();
const PORT = 3001;

/*
  GET /api/terms
  Returns the full list of terms
*/
app.get('/api/terms', (req, res) => {
  res.json(termData);
});

/*
  GET /api/terms/:term
  Returns a single term that matches the route parameter
*/
app.get('/api/terms/:term', (req, res) => {
  // Read the value from the URL
  const requestedTerm = req.params.term.toLowerCase();

  // Search for a matching term
  const match = termData.find(
    (item) => item.term.toLowerCase() === requestedTerm
  );

  // Return the result (or a helpful message)
  if (match) {
    return res.json(match);
  }

  res.json({
    error: 'Term not found',
    searchedFor: requestedTerm,
  });
});

/*
  Fallback route
  Runs if no other GET route matches
*/
app.get('*', (req, res) => {
  res.send(`
    <h2>Route not found</h2>
    <p>Try one of the following:</p>
    <ul>
      <li><code>/api/terms</code></li>
      <li><code>/api/terms/http</code></li>
      <li><code>/api/terms/json</code></li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`Instructor demo running at http://localhost:${PORT}`);
});
