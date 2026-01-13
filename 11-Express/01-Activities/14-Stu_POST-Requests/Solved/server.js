const express = require("express");

const PORT = 3001;
const app = express();

const reviews = [
  { id: 1, title: "Great coffee", rating: 5, comment: "Fast service." },
  { id: 2, title: "Okay experience", rating: 3, comment: "Could be better." },
];

// GET route for reviews
app.get("/api/reviews", (req, res) => {
  // Log the request to the terminal
  console.info(`${req.method} request received to fetch reviews`);
  // Respond to the client
  res.json(`${req.reviews} request received to fetch reviews`);
});

// POST route for reviews
app.post("/api/reviews", (req, res) => {
  // Log the request to the terminal
  console.info(`${req.method} request received to add a review`);

  // Respond to the client
  res.json(`${req.method} request received to add a review`);
});

// GET route for upvotes
app.get("/api/upvotes", (req, res) => {
  // Log the request to the terminal
  console.info(`${req.method} request received to retrieve upvotes`);

  // Respond to the client
  res.json(`${req.method} request received to retrieve upvotes`);
});

// POST route for upvotes
app.post("/api/upvotes", (req, res) => {
  // Log the request to the terminal
  console.info(`${req.method} request received to submit an upvote`);

  // Respond to the client
  res.json(`${req.method} request received to submit an upvote`);
});

// Start the server
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
