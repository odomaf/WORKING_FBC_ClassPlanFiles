const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

const connectionStringURI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionStringURI);

let db;

// Bootcamp naming
const dbName = "bootcampLibraryDB";

app.use(express.json());

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    db = client.db(dbName);

    const collection = db.collection("bookInventory");

    await collection.deleteMany({});

    const data = [
      {
        title: "Good Omens",
        authors: [
          { name: "Neil Gaiman", featured: true },
          { name: "Terry Pratchett", featured: true },
        ],
        information: { ISBN: 9780425132159, price: 10, total_in_stock: 10 },
      },
      {
        title: "Heads You Lose",
        authors: [
          { name: "Lisa Lutz", featured: false },
          { name: "David Hayward", featured: false },
        ],
        information: { ISBN: 9780399157400, price: 20, total_in_stock: 8 },
      },
      {
        title: "Between the Lines",
        authors: [
          { name: "Jodi Picoult", featured: true },
          { name: "Samantha Van Leer", featured: false },
        ],
        information: { ISBN: 9781451635751, price: 5, total_in_stock: 5 },
      },
    ];

    await collection.insertMany(data);

    app.listen(port, () => {
      console.log(`🚀 API running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Mongo connection error:", err.message);
  }
}

seedDBAndStartServer();

/**
 * Correct query using dot notation for embedded object
 */
app.get("/books/price-under-10", (req, res) => {
  db.collection("bookInventory")
    .find({ "information.price": { $lt: 10 } })
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});

/**
 * Correct query using dot notation for embedded array
 */
app.get("/books/featured", (req, res) => {
  db.collection("bookInventory")
    .find({ "authors.featured": true })
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => res.status(500).json({ error: err.message }));
});
