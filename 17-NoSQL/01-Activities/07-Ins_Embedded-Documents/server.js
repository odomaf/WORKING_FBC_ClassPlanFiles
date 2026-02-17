const express = require("express");
const { MongoClient } = require("mongodb");
const seedData = require("./models/data");

const app = express();
const port = 3001;

// Local MongoDB connection string
const connectionStringURI = "mongodb://127.0.0.1:27017";

// MongoDB client instance
const client = new MongoClient(connectionStringURI);

// Database connection handle
let db;

// Bootcamp-style database name
const dbName = "bootcampMarketDB";

app.use(express.json());

/**
 * Seed the DB on startup so the instructor demo is repeatable.
 * This is intentionally "destructive" (clears the collection) for demo purposes.
 */
async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    db = client.db(dbName);

    // Use a bootcamp-themed collection name
    const collection = db.collection("marketInventory");

    // Reset collection for a consistent demo every run
    await collection.deleteMany({});

    // Insert seed documents
    const result = await collection.insertMany(seedData);
    console.log(
      `📦 Seeded ${result.insertedCount} documents into ${dbName}.marketInventory`,
    );

    // Start Express server after DB is seeded
    app.listen(port, () => {
      console.log(`🚀 API server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Mongo connection error:", err.message);
  }
}

seedDBAndStartServer();

/**
 * GET /inventory/discounts-over-30
 *
 * Demonstrates querying "embedded documents" using dot notation.
 * Also supports the case where "promotion" may be an object OR an array of objects.
 *
 * We want promotions where percentage_discount >= 30.
 */
app.get("/inventory/discounts-over-30", (req, res) => {
  db.collection("marketInventory")
    .find({
      $or: [
        // promotion is a single embedded document (one-to-one)
        { "promotion.percentage_discount": { $gte: 30 } },

        // promotion is an array of embedded documents (one-to-many)
        { "promotion.percentage_discount": { $gte: 30 } },
      ],
    })
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});
