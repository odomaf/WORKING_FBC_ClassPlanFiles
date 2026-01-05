const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// ✅ GET request for reviews (now returns real data)
app.get('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to get reviews`);

  fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        status: 'error',
        message: 'Could not read reviews file.',
      });
    }

    try {
      const reviews = JSON.parse(data);
      return res.status(200).json({
        status: 'success',
        total: reviews.length,
        body: reviews,
      });
    } catch (parseErr) {
      console.error(parseErr);
      return res.status(500).json({
        status: 'error',
        message: 'Reviews file contains invalid JSON.',
      });
    }
  });
});

// ✅ POST request to add a review (fixed: append to existing JSON)
app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  const { product, review, username } = req.body;

  // Basic validation
  if (
    typeof product !== 'string' ||
    typeof review !== 'string' ||
    typeof username !== 'string' ||
    !product.trim() ||
    !review.trim() ||
    !username.trim()
  ) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields: product, review, username',
    });
  }

  const newReview = {
    product: product.trim(),
    review: review.trim(),
    username: username.trim(),
    review_id: uuid(),
  };

  // 1) Read existing reviews
  fs.readFile('./db/reviews.json', 'utf8', (readErr, data) => {
    if (readErr) {
      console.error(readErr);
      return res.status(500).json({
        status: 'error',
        message: 'Could not read reviews file.',
      });
    }

    let parsedReviews;

    // 2) Parse JSON safely
    try {
      parsedReviews = JSON.parse(data);
      if (!Array.isArray(parsedReviews)) parsedReviews = [];
    } catch (parseErr) {
      console.error(parseErr);
      parsedReviews = [];
    }

    // 3) Append the new review
    parsedReviews.push(newReview);

    // 4) Write updated array back to the file
    fs.writeFile(
      './db/reviews.json',
      JSON.stringify(parsedReviews, null, 2),
      (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
          return res.status(500).json({
            status: 'error',
            message: 'Could not write to reviews file.',
          });
        }

        console.info('Successfully appended review!');

        // Respond to client
        return res.status(201).json({
          status: 'success',
          body: newReview,
        });
      }
    );
  });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
