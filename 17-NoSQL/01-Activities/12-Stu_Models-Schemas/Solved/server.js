const express = require("express");
const db = require("./config/connection");

// Import the Book model to interact with the books collection
const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * GET /books
 * Uses the Book model to query MongoDB and return all book documents.
 */
app.get("/books", async (req, res) => {
  try {
    const results = await Book.find({});
    res.status(200).json(results);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// Start the server only after Mongoose successfully connects
db.once("open", () => {
  console.log("✅ Mongoose connected");
  app.listen(PORT, () => {
    console.log(`🚀 API server running on port ${PORT}`);
  });
});
