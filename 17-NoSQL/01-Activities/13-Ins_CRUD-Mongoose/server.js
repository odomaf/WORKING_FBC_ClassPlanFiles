const express = require("express");
const db = require("./config/connection");
const { Department } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * CREATE
 * POST /departments
 * Body: { "name": "Produce" }
 */
app.post("/departments", async (req, res) => {
  try {
    const created = await Department.create({ name: req.body.name });
    return res.status(201).json(created);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to create department", error: err.message });
  }
});

/**
 * READ
 * GET /departments
 */
app.get("/departments", async (req, res) => {
  try {
    const results = await Department.find({});
    return res.status(200).json(results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to fetch departments", error: err.message });
  }
});

/**
 * READ (single)
 * GET /departments/:name
 * Finds the first matching document by name.
 */
app.get("/departments/:name", async (req, res) => {
  try {
    const result = await Department.findOne({ name: req.params.name });

    if (!result) {
      return res.status(404).json({ message: "Department not found" });
    }

    return res.status(200).json(result);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to fetch department", error: err.message });
  }
});

/**
 * DELETE
 * DELETE /departments/:name
 * Deletes the first matching document by name.
 */
app.delete("/departments/:name", async (req, res) => {
  try {
    const deleted = await Department.findOneAndDelete({
      name: req.params.name,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Department not found" });
    }

    return res.status(200).json({ message: "Department deleted", deleted });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to delete department", error: err.message });
  }
});

// Start server after DB connects
db.once("open", () => {
  console.log("✅ Mongoose connected");
  app.listen(PORT, () => console.log(`🚀 API server running on port ${PORT}`));
});
