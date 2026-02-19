const express = require("express");
const db = require("./config/connection");
const { Library } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/libraries", async (req, res) => {
  try {
    const results = await Library.find({});
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));
});
