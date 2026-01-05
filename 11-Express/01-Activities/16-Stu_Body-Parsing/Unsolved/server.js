const express = require('express');

const PORT = 3001;

// TODO: Import the reviews data from ./db/reviews.json

// TODO: Create an Express app
const app = express();

// TODO: Add middleware to parse JSON bodies

// TODO: Add middleware to parse URL-encoded bodies

app.get('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to get all reviews`);
  // TODO: return reviews
});

app.post('/api/upvotes/:review_id', (req, res) => {
  // TODO: Implement upvote logic
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}`)
);
