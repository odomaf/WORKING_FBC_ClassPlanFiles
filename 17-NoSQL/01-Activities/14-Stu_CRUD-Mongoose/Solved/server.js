const express = require("express");
const db = require("./config/connection");
const { Genre } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CREATE
app.post("/genres", async (req, res) => {
  try {
    const created = await Genre.create({ name: req.body.name });
    return res.status(201).json(created);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to create genre", error: err.message });
  }
});

// READ ALL
app.get("/genres", async (req, res) => {
  try {
    const results = await Genre.find({});
    return res.status(200).json(results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to fetch genres", error: err.message });
  }
});

// READ ONE (first match)
app.get("/genres/:name", async (req, res) => {
  try {
    const result = await Genre.findOne({ name: req.params.name });

    if (!result) {
      return res.status(404).json({ message: "Genre not found" });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to fetch genre", error: err.message });
  }
});

// DELETE (first match)
app.delete("/genres/:name", async (req, res) => {
  try {
    const deleted = await Genre.findOneAndDelete({ name: req.params.name });

    if (!deleted) {
      return res.status(404).json({ message: "Genre not found" });
    }

    return res.status(200).json({ message: "Genre deleted", deleted });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to delete genre", error: err.message });
  }
});

// UPDATE (PUT) — implement update using findOneAndUpdate
app.put("/genres/:name", async (req, res) => {
  try {
    const updated = await Genre.findOneAndUpdate(
      { name: req.params.name }, // filter
      { name: req.body.name }, // update ONLY name
      { new: true }, // return updated doc
    );

    if (!updated) {
      return res.status(404).json({ message: "Genre not found" });
    }

    return res.status(200).json(updated);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to update genre", error: err.message });
  }
});

db.once("open", () => {
  console.log("✅ Mongoose connected");
  app.listen(PORT, () => console.log(`🚀 API server running on port ${PORT}`));
});
