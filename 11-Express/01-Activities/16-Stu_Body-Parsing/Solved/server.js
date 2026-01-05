const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to get all reviews`);
  res.status(200).json(reviews);
});

app.post('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  const { upvote } = req.body;

  if (upvote === undefined) {
    return res.status(400).json({ message: 'Missing upvote field' });
  }

  const review = reviews.find(r => String(r.review_id) === String(review_id));

  if (!review) {
    return res.status(404).json({ message: 'Review not found' });
  }

  if (upvote === true || upvote === 'true') {
    review.upvotes++;
  }

  res.json({ review_id: review.review_id, upvotes: review.upvotes });
});

app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`)
);
