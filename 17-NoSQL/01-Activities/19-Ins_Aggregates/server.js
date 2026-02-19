const express = require("express");
const db = require("./config/connection");
const { Item } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * GET /items/price-stats
 *
 * Instructor demo: Mongoose aggregation pipeline
 * - $match: filter documents
 * - $group: compute summary stats
 */
app.get("/items/price-stats", async (req, res) => {
  try {
    const results = await Item.aggregate([
      // Only include items priced <= 5
      { $match: { price: { $lte: 5 } } },

      // Group into a single bucket and compute aggregate stats
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

    return res.status(200).json(results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to run aggregation", error: err.message });
  }
});

db.once("open", () => {
  console.log("✅ Mongoose connected");
  app.listen(PORT, () => console.log(`🚀 API server running on port ${PORT}`));
});
