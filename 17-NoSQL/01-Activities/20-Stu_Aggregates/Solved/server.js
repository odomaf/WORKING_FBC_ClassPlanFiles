const express = require("express");
const db = require("./config/connection");
const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View all books
app.get("/books", async (req, res) => {
  try {
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ FIXED: Only include books in stock
app.get("/books/price-summary", async (req, res) => {
  try {
    const result = await Book.aggregate([
      // Equivalent to SQL WHERE inStock = true
      { $match: { inStock: true } },

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

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Aggregation failed" });
  }
});

db.once("open", () => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
