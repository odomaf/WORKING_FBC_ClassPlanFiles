const express = require("express");
// Run npm install mongodb and require mongodb and MongoClient class
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = "mongodb://127.0.0.1:27017";

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = "bootcampDB";

// Built in Express middleware that parses incoming requests to JSON
app.use(express.json());

// Use connect method to connect to the mongo server
client
  .connect()
  .then(() => {
    console.log("✅ Connected successfully to MongoDB");
    // Use client.db() constructor to select (or create) a database instance
    db = client.db(dbName);

    // Start up express server after DB connection is ready
    app.listen(port, () => {
      console.log(`🚀 API server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Mongo connection error:", err.message);
  });

// CREATE: Add one document to the collection
app.post("/students", (req, res) => {
  db.collection("studentCollection")
    .insertOne({
      name: req.body.name,
      track: req.body.track,
    })
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// READ: Get all documents from the collection
app.get("/students", (req, res) => {
  db.collection("studentCollection")
    .find()
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});
