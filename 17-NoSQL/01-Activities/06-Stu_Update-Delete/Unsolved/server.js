const express = require("express");
// Import MongoClient to connect, and ObjectId for querying by _id
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3001;

const connectionStringURI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionStringURI);

let db;

const dbName = "bootcampLibraryDB";

app.use(express.json());

client
  .connect()
  .then(() => {
    console.log("✅ Connected successfully to MongoDB");
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`🚀 API server running at http://localhost:${port}`);
      console.log(`📚 Using database: ${dbName}`);
    });
  })
  .catch((err) => {
    console.error("❌ Mongo connection error:", err.message);
  });

app.post("/books", (req, res) => {
  db.collection("bookCollection")
    .insertOne({ title: req.body.title, author: req.body.author })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/books", (req, res) => {
  db.collection("bookCollection")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});

/**
 * TODO: Add a DELETE route:
 *   DELETE /books/:id
 *
 * Requirements:
 *  - Read the id from req.params.id
 *  - Convert it to an ObjectId
 *  - Call deleteOne({ _id: objectId })
 *  - Return a helpful response:
 *      - if deletedCount === 1 -> "Document deleted"
 *      - else -> "No document found"
 */
app.delete("/books/:id", (req, res) => {
  db.collection("bookCollection")
    .deleteOne({ _id: new ObjectId(req.params.id) }) 
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});
