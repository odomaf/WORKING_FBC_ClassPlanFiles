const express = require("express");
// Import MongoClient to connect, and ObjectId to safely query by _id
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3001;

// Local MongoDB connection string
const connectionStringURI = "mongodb://127.0.0.1:27017";

// Create a MongoClient instance (connects when we call client.connect())
const client = new MongoClient(connectionStringURI);

// Holds our selected database connection after connect succeeds
let db;

// Our bootcamp database name
const dbName = "bootcampLibraryDB";

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB, then start the server
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

// CREATE: add one book
app.post("/books", (req, res) => {
  db.collection("bookCollection")
    .insertOne({ title: req.body.title, author: req.body.author })
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// READ: get all books
app.get("/books", (req, res) => {
  db.collection("bookCollection")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// DELETE: delete one book by its MongoDB _id
app.delete("/books/:id", (req, res) => {
  let bookId;

  // Convert the string route param to an ObjectId.
  // If the id is invalid, ObjectId will throw — we catch that and return 400.
  try {
    bookId = new ObjectId(req.params.id);
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Invalid id format. Must be a valid ObjectId." });
  }

  db.collection("bookCollection")
    .deleteOne({ _id: bookId }) // filter ensures we delete ONLY the requested document
    .then((result) => {
      // deletedCount will be 1 if a document was deleted, or 0 if none matched
      if (result.deletedCount === 1) {
        return res.json({
          message: "✅ Document deleted",
          deletedId: req.params.id,
        });
      }
      return res
        .status(404)
        .json({ message: "No document found with that id." });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});
