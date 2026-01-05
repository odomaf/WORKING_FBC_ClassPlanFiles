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

// GET request for reviews (keep simple for now)
app.get('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to get reviews`);
  res.status(200).json(`${req.method} request received to get reviews`);
});

// POST request to add a review (BUG: overwrites reviews.json)
app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);

  const { product, review, username } = req.body;

  if (product && review && username) {
    const newReview = {
      product,
      review,
      username,
      review_id: uuid(),
    };

    // ❌ BUG (on purpose): This overwrites the entire JSON file with only the new review.
    fs.writeFile(
      './db/reviews.json',
      JSON.stringify([newReview], null, 2),
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Saved review (but overwrote the file)...');
        }
      }
    );

    res.status(201).json({
      status: 'success',
      body: newReview,
    });
  } else {
    res.status(400).json('Missing required fields: product, review, username');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
