const express = require("express");
const db = require("./config/connection");
const { Library } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * GET /libraries
 * Returns parent Library documents that contain embedded books subdocuments.
 */
app.get("/libraries", async (req, res) => {
  try {
    const results = await Library.find({});
    return res.status(200).json(results);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
});

db.once("open", () => {
  console.log("✅ Mongoose connected");
  app.listen(PORT, () => console.log(`🚀 API server running on port ${PORT}`));
});
