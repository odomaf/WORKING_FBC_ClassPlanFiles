const express = require('express');

const PORT = 3001;
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory "database" for demo purposes
const reviews = [
  { id: 1, title: 'Great coffee', rating: 5, comment: 'Fast service.' },
  { id: 2, title: 'Okay experience', rating: 3, comment: 'Could be better.' },
];

// GET request (read all reviews)
app.get('/api/reviews', (req, res) => {
  console.info(req.rawHeaders);
  console.info(`${req.method} request received`);

  res.json(reviews);
});

// POST request (create a new review)
app.post('/api/reviews', (req, res) => {
  console.info(req.rawHeaders);
  console.info(`${req.method} request received`);

  const { title, rating, comment } = req.body;

  // Minimal validation (for teaching)
  if (!title || !rating) {
    return res.status(400).json({
      error: 'Missing required fields: title and rating',
    });
  }

  const newReview = {
    id: reviews.length + 1,
    title,
    rating,
    comment: comment || '',
  };

  reviews.push(newReview);

  res.status(201).json({
    message: 'Review created!',
    review: newReview,
  });
});

app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}!`)
);
