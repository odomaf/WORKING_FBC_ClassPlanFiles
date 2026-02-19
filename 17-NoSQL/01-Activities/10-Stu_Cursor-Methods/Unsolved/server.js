const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const connectionStringURI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionStringURI);

let db;

// Bootcamp naming
const dbName = "bootcampNumbersDB";

const seedData = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

app.use(express.json());

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    db = client.db(dbName);
    const collection = db.collection("numberList");

    await collection.deleteMany({});
    await collection.insertMany(seedData);

    app.listen(port, () => {
      console.log(`🚀 API server running at http://localhost:${port}`);
      console.log(`🔢 Using database: ${dbName}`);
    });
  } catch (err) {
    console.error("❌ Mongo connection error:", err.message);
  }
}

seedDBAndStartServer();

/**
 * GET /numbers
 *
 * TODO: Update this route to meet the acceptance criteria:
 *  - Sort in descending order
 *  - Skip the largest 5 numbers
 *  - Limit results to 5 documents
 */
app.get("/numbers", (req, res) => {
  db.collection("numberList")
    .find()
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});
