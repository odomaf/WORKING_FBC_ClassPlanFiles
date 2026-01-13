const express = require("express");

const PORT = 3001;
const app = express();

const reviews = [
  { id: 1, title: "Great coffee", rating: 5, comment: "Fast service." },
  { id: 2, title: "Okay experience", rating: 3, comment: "Could be better." },
];

// TODO: Create a GET route for `/api/reviews`
// It should:
// - Log a message to the terminal when a GET request is received
// - Send a JSON response back to the client
app.get("/api/reviews", (req, res) => {
  console.log("Getting Reviews");
  res.json({ reviews });
});

// TODO: Create a POST route for `/api/reviews`
// It should:
// - Log a message to the terminal when a POST request is received
// - Send a JSON response back to the client
// Your code here
app.post("/api/reviews", (req, res) => {
  console.log("Posting Review");
  res.send(
    "This is when we would post the confirmation of having posted info, but we are not actually posting info in this excercise"
  );
});

// TODO: Create a GET route for `/api/upvotes`
// It should:
// - Log a message to the terminal when a GET request is received
// - Send a JSON response back to the client
app.get("/api/upvotes", (req, res) => {
  // Your code here
});

// TODO: Create a POST route for `/api/upvotes`
// It should:
// - Log a message to the terminal when a POST request is received
// - Send a JSON response back to the client
// Your code here

// TODO: Start the Express server on port 3001
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
