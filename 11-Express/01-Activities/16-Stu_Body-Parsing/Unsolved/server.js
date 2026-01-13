const express = require("express");

const PORT = 3001;

// TODO: Import the reviews data from ./db/reviews.json
const reviews = require("./db/reviews.json");

// TODO: Create an Express app
const app = express();

// TODO: Add middleware to parse JSON bodies
app.use(express.json());

// TODO: Add middleware to parse URL-encoded bodies (html forms)
app.use(express.urlencoded({ extended: true }));

app.get("/api/reviews", (req, res) => {
  console.info(`${req.method} request received to get all reviews`);
  res.json({ reviews });
});

app.post("/api/upvotes/:review_id", (req, res) => {
  console.info(`${req.method} request received to upvote a review`);
  //res.send(`${req.method} request received to upvote a review`);
  // TODO: Implement upvote logic
  res.json({ reviews });
});

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
