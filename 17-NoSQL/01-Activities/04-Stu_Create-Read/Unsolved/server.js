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
const dbName = "bootcampLibraryDB";

// Use connect method to connect to the mongo server
client
  .connect()
  .then(() => {
    console.log("Connected successfully to MongoDB");
    // Use client.db() constructor to add new db instance
    db = client.db(dbName);

    // Start up express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });

// Built in Express function that parses incoming requests to JSON
app.use(express.json());

// Post request to create a single document to collection
app.post("/books", (req, res) => {
  db.collection("bookCollection")
    .insertOne({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
    })
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});

// Post request to add multiple sample documents to collection
app.post("/books/seed", (req, res) => {
  db.collection("bookCollection")
    .insertMany([
      { title: "Oh the Places We Will Go!" },
      { title: "Diary of Anne Frank" },
    ])
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});

// Get request to read all the documents in a collection
app.get("/books", (req, res) => {
  db.collection("bookCollection")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});
