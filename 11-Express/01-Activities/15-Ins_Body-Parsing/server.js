const express = require("express");

const PORT = 3001;

// Import our local data (mock database)
const reviews = require("./db/reviews.json");

const app = express();

/*
  ---------------------------------------
  Middleware
  ---------------------------------------
  These middleware functions allow Express
  to read incoming request bodies.
*/

// Parse incoming JSON data
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

/*
  ---------------------------------------
  GET /api/reviews
  ---------------------------------------
  Returns ALL reviews
*/
app.get("/api/reviews", (req, res) => {
  console.info(`${req.method} request received to get all reviews`);

  // Send all review data back to the client
  res.json({ reviews });
});

/*
  ---------------------------------------
  POST /api/reviews
  ---------------------------------------
  Accepts a new review in the request body
*/
app.post("/api/reviews", (req, res) => {
  console.info(`${req.method} request received to add a new review`);

  // Log incoming data for debugging
  console.log("Request body:", req.body);

  // Basic validation
  if (!req.body?.eventName || !req.body?.username) {
    return res.json({
      status: "error",
      message: "Request body must include at least an eventName and username",
    });
  }

  // Build a response object (not saving permanently yet)
  const response = {
    status: "success",
    data: req.body,
  };

  // Send confirmation back to the client
  res.json(response);
});

// Start the server
app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`)
);
