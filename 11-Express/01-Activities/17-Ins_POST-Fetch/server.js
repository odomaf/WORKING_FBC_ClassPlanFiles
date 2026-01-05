const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid');
const reviews = require('./db/reviews');

const PORT = 3001;
const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
app.use(express.static('public'));

// Serve the form page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET all reviews
app.get('/api/reviews', (req, res) => {
  res.status(200).json(reviews);
});

// POST a new review (event-based)
app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  const { eventName, location, username, review, rating } = req.body;

  // Validate required fields
  if (!eventName || !location || !username || !review) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required review fields',
    });
  }

  const newReview = {
    eventName,
    location,
    username,
    review,
    rating: rating ?? null,
    review_id: uuid(),
  };

  // NOTE: Persistence not implemented yet (in-memory only)
  reviews.push(newReview);

  res.status(201).json({
    status: 'success',
    body: newReview,
  });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
