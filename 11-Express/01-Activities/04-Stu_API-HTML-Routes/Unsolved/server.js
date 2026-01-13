// server.js (UNSOLVED)

// TODO: Import express
const express = require("express");

// TODO: Require the JSON file and store it in a variable
const termData = require("./terms.json");

// TODO: Create an Express app
const app = express();
const PORT = 3001;

// TODO: Create a GET route at / that tells the user to visit /api
app.get("/", (req, res) => {
  res.send(`Goto <a href='/api'>/api</a>`);
});

// TODO: Create a GET route at /api that returns the JSON data
app.get("/api", (req, res) => {
  res.send({ termData });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
