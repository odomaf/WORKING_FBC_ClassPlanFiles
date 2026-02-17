/**
 * Unit 17 — MongoDB Create + Read (Express + MongoDB Node Driver)
 *
 * What this server demonstrates:
 *  - Connecting to MongoDB using MongoClient
 *  - Selecting/creating a database via client.db(dbName)
 *  - Creating/choosing a collection via db.collection(collectionName)
 *  - CREATE operations: insertOne(), insertMany()
 *  - READ operations: find() + toArray()
 */

const express = require("express");

// The official MongoDB Node.js driver provides MongoClient, which is the primary
// way a Node app connects to a MongoDB server.
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

/**
 * Connection string for a local MongoDB server.
 * - 127.0.0.1 is localhost
 * - 27017 is MongoDB’s default port
 */
const connectionStringURI = "mongodb://127.0.0.1:27017";

/**
 * Create a MongoClient instance.
 * This does not immediately connect—connection is established when we call client.connect().
 */
const client = new MongoClient(connectionStringURI);

/**
 * We'll store a reference to the selected database here after connection succeeds.
 * This variable becomes our "handle" to run operations on collections.
 */
let db;

/**
 * Database name:
 * MongoDB creates the database automatically once you write data into it.
 */
const dbName = "bootcampLibraryDB";

/**
 * Middleware: parse incoming JSON request bodies.
 * Without this, req.body will be undefined for JSON POST requests.
 */
app.use(express.json());

/**
 * Connect to MongoDB first, THEN start the Express server.
 *
 * Why?
 * - Our route handlers depend on `db` being ready.
 * - If we start the server before connecting, requests could arrive while `db` is undefined.
 */
client
  .connect()
  .then(() => {
    console.log("✅ Connected successfully to MongoDB");

    // Select (or prepare) the database instance.
    // Note: the DB is effectively created when we insert the first document.
    db = client.db(dbName);

    // Only start listening after the database connection is available.
    app.listen(port, () => {
      console.log(`🚀 API server running at http://localhost:${port}`);
      console.log(`📚 Using MongoDB database: ${dbName}`);
    });
  })
  .catch((err) => {
    // If the DB connection fails, we log the error and do NOT start the server.
    console.error("❌ Mongo connection error:", err.message);
  });

/**
 * POST /books
 * CREATE: insert a single book document into "bookCollection"
 *
 * Expected JSON body:
 * {
 *   "title": "MongoDB for Beginners",
 *   "author": "Some Author"
 * }
 */
app.post("/books", (req, res) => {
  // db.collection(name) selects an existing collection or prepares a new one.
  // MongoDB creates the collection automatically on first insert.
  const collection = db.collection("bookCollection");

  // insertOne() inserts one document (a single JSON-like object).
  collection
    .insertOne({
      title: req.body.title,
      author: req.body.author,
    })
    .then((result) => {
      // The driver returns metadata about the operation (acknowledged, insertedId, etc.)
      res.json(result);
    })
    .catch((err) => {
      // In production, avoid throwing inside async handlers—return a response instead.
      res.status(500).json({ error: err.message });
    });
});

/**
 * POST /books/seed
 * CREATE (bulk): insert multiple sample documents at once.
 *
 * insertMany() is useful for:
 * - seeding demo data
 * - importing batches
 * - quickly generating test records
 */
app.post("/books/seed", (req, res) => {
  const collection = db.collection("bookCollection");

  collection
    .insertMany([
      { title: "Oh the Places We Will Go!" },
      { title: "Diary of Anne Frank" },
    ])
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

/**
 * GET /books
 * READ: retrieve all documents in the collection.
 *
 * Key concept:
 * - find() returns a CURSOR (a pointer to results), not an array
 * - toArray() consumes the cursor and returns a real JavaScript array of documents
 *
 * find({}) is equivalent to "SELECT *" in SQL.
 */
app.get("/books", (req, res) => {
  const collection = db.collection("bookCollection");

  collection
    .find({}) // filter object; empty means "match everything"
    .toArray() // convert cursor to an array of documents
    .then((documents) => res.json(documents))
    .catch((err) => res.status(500).json({ error: err.message }));
});
