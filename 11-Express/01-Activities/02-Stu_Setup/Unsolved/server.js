// server.js (UNSOLVED)
const express = require("express");
const path = require("path");

// TODO: Create an Express app instance
const app = express();
const PORT = 3001;

// Home route: serve index.html (instead of a plain text message)

// TODO: Add middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// TODO: Create a route that serves paths.html at GET /paths
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// TODO: Create a route that serves send.html at GET /send
app.get("/send", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "send.html"));
});

app.get("/paths", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "paths.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
