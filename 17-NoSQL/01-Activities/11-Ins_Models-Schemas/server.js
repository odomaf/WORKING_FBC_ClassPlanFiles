const express = require("express");
const db = require("./config/connection");

// Require model(s)
const { Item } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Instructor Demo:
 * Use a Mongoose model in an Express route to fetch documents.
 */
app.get("/items", async (req, res) => {
  try {
    // Find all documents that match the Item model's schema
    const results = await Item.find({});
    res.status(200).json(results);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// Start server only after DB connection is open
db.once("open", () => {
  console.log("✅ Mongoose connected");
  app.listen(PORT, () => {
    console.log(`🚀 API server running on port ${PORT}`);
  });
});
