// Unsolved/server.js
const express = require("express");
const db = require("./config/connection");
const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * GET /books
 * Returns all books (for comparison when debugging the aggregate route).
 */
app.get("/books", async (req, res) => {
  try {
    const results = await Book.find({});
    return res.status(200).json(results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to fetch books", error: err.message });
  }
});

/**
 * GET /books/price-summary
 *
 * ❌ BUG (intentionally for students):
 * - This route returns summary stats for ALL books
 * - It should return stats ONLY for books that are inStock
 *
 * ✅ Student goal:
 * - Update the aggregation pipeline so it filters by { inStock: true }
 * - BEFORE the $group stage runs
 */
app.get("/books/price-summary", async (req, res) => {
  try {
    const summary = await Book.aggregate([
      // TODO: Add a pipeline stage here to filter only in-stock books

      {
        $group: {
          _id: null,
          sum_price: { $sum: "$price" },
          avg_price: { $avg: "$price" },
          max_price: { $max: "$price" },
          min_price: { $min: "$price" },
        },
      },
    ]);

    return res.status(200).json(summary);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Aggregation failed", error: err.message });
  }
});

db.once("open", () => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
