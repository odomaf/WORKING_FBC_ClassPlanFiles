const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Genre = mongoose.model("Genre", genreSchema);

/**
 * Seed demo data (only if collection is empty).
 * Duplicates are intentionally allowed to discuss uniqueness constraints.
 */
async function seedGenres() {
  try {
    const count = await Genre.countDocuments();

    if (count === 0) {
      await Genre.insertMany([
        { name: "Kids" },
        { name: "Kids" },
        { name: "Kids" },
        { name: "Romance" },
        { name: "Mystery" },
        { name: "Contemporary" },
        { name: "Biography" },
      ]);

      console.log("📦 Seeded demo genres");
    } else {
      console.log("ℹ️ Genres already seeded. Skipping.");
    }
  } catch (err) {
    console.error("❌ Genre seed error:", err.message);
  }
}

seedGenres();

module.exports = Genre;
