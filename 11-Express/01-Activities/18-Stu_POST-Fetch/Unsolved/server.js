const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid');
const reviews = require('./db/reviews');

const PORT = 3001;
const app = express();

// TODO: Add comments explaining what each middleware does
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// TODO: Add comments explaining the purpose of this GET route
app.get('/api/reviews', (req, res) => {
  console.info(`GET /api/reviews`);
  res.status(200).json(reviews);
});

// TODO: Add comments explaining how params work here
app.get('/api/reviews/:review_id', (req, res) => {
  const { review_id } = req.params;

  if (!review_id) {
    return res.status(400).send('Review ID not found!');
  }

  const review = reviews.find((rev) => rev.review_id == review_id);

  if (!review) {
    return res.status(404).json('Review not found!');
  }

  res.status(200).json(review);
});

// TODO: Add comments explaining req.body + validation + response
app.post('/api/reviews', (req, res) => {
  const { eventName, location, username, review, rating } = req.body;

  if (eventName && location && username && review) {
    const newReview = {
      eventName,
      location,
      username,
      review,
      rating: rating ?? null,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    reviews.push(newReview);
    return res.status(201).json(response);
  }

  res.status(400).json('Error: missing required fields');
});

// TODO: Add comments explaining how upvotes are read
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

// TODO: Add comments explaining how upvotes are updated using req.body
app.post('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  const { upvote } = req.body;

  if (upvote === undefined) {
    return res.status(400).json('Provide a req.body with upvote!');
  }

  const review = reviews.find((rev) => rev.review_id == review_id);

  if (!review) {
    return res.status(404).json('Review not found!');
  }

  review.upvotes++;
  res.json(`New upvote count is ${review.upvotes}!`);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
