const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

// Local MongoDB connection
const connectionStringURI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionStringURI);

let db;

// Bootcamp naming
const dbName = "bootcampAlphabetDB";

// Seed data (intentionally out of order so sort() is meaningful)
const seedLetters = [
  { letter: "a" },
  { letter: "c" },
  { letter: "e" },
  { letter: "f" },
  { letter: "h" },
  { letter: "i" },
  { letter: "j" },
  { letter: "l" },
  { letter: "b" },
  { letter: "d" },
  { letter: "g" },
  { letter: "k" },
];

app.use(express.json());

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    db = client.db(dbName);

    const collection = db.collection("letterList");

    // Reset for consistent instructor demo
    await collection.deleteMany({});
    await collection.insertMany(seedLetters);

    app.listen(port, () => {
      console.log(`🚀 API server running at http://localhost:${port}`);
      console.log(`🔤 Using database: ${dbName}`);
    });
  } catch (err) {
    console.error("❌ Mongo connection error:", err.message);
  }
}

seedDBAndStartServer();

/**
 * GET /letters
 *
 * Instructor demo for MongoDB cursor methods:
 * - sort(): order documents
 * - skip(): offset
 * - limit(): page size
 */
app.get("/letters", (req, res) => {
  db.collection("letterList")
    .find()
    .sort({ letter: 1 }) // 1 = ascending, -1 = descending
    .skip(1) // skip the first result (demo purpose)
    .limit(10) // limit results (demo purpose)
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});
