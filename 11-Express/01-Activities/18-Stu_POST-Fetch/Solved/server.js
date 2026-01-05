const express = require('express');
const path = require('path');

// Helper function that generates unique IDs for new reviews
const uuid = require('./helpers/uuid');

// Our in-memory dataset (an array of review objects)
const reviews = require('./db/reviews');

const PORT = 3001;
const app = express();

/**
 * Middleware:
 * express.json()
 * - Parses JSON request bodies
 * - Makes data available on req.body as a JS object
 */
app.use(express.json());

/**
 * Middleware:
 * express.urlencoded({ extended: true })
 * - Parses form URL-encoded request bodies
 * - Makes data available on req.body
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware:
 * express.static('public')
 * - Serves files inside /public automatically (HTML/CSS/JS/images)
 */
app.use(express.static('public'));

/**
 * GET /
 * Sends the HTML file that loads the frontend form
 */
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

/**
 * GET /api/reviews
 * Returns all reviews as JSON (read operation)
 */
app.get('/api/reviews', (req, res) => {
  console.info('GET /api/reviews');
  res.status(200).json(reviews);
});

/**
 * GET /api/reviews/:review_id
 * Demonstrates route params:
 * - req.params.review_id comes from the URL
 * - Example: /api/reviews/a1f3
 */
app.get('/api/reviews/:review_id', (req, res) => {
  const { review_id } = req.params;

  // Validate the param exists
  if (!review_id) {
    return res.status(400).send('Review ID not found!');
  }

  // Find the matching review in our array
  const review = reviews.find((rev) => rev.review_id == review_id);

  // If not found, return a 404
  if (!review) {
    return res.status(404).json('Review not found!');
  }

  // Otherwise return the review
  res.status(200).json(review);
});

/**
 * POST /api/reviews
 * Creates a new review from req.body
 * NOTE: This is in-memory only (not saved to a database yet)
 */
app.post('/api/reviews', (req, res) => {
  // req.body is populated by express.json() / express.urlencoded()
  const { eventName, location, username, review, rating } = req.body;

  // Validate required fields
  if (!eventName || !location || !username || !review) {
    return res.status(400).json('Error: missing required fields');
  }

  // Create a new object for the review
  const newReview = {
    eventName,
    location,
    username,
    review,
    rating: rating ?? null,
    upvotes: Math.floor(Math.random() * 100),
    review_id: uuid(),
  };

  // Add to our array (in memory)
  reviews.push(newReview);

  // Send back a response that includes the new object
  res.status(201).json({
    status: 'success',
    body: newReview,
  });
});

/**
 * GET /api/upvotes/:review_id
 * Returns the upvote count for one review
 */
app.get('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;

  const review = reviews.find((rev) => rev.review_id == review_id);

  if (!review) {
    return res.status(404).json('Review not found!');
  }

  res.json({
    message: `The review with ID ${review.review_id} has ${review.upvotes} upvotes`,
    upvotes: review.upvotes,
  });
});

/**
 * POST /api/upvotes/:review_id
 * Uses req.body to confirm the client intended to upvote
 * Then increments review.upvotes
 */
app.post('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  const { upvote } = req.body;

  // Require an "upvote" field in the body
  if (upvote === undefined) {
    return res.status(400).json('Provide a req.body with upvote!');
  }

  const review = reviews.find((rev) => rev.review_id == review_id);

  if (!review) {
    return res.status(404).json('Review not found!');
  }

  // Increase the upvote count
  review.upvotes++;

  res.json(`New upvote count is ${review.upvotes}!`);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
