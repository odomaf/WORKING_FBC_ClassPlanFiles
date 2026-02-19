const mongoose = require("mongoose");

/**
 * Subdocument schema:
 * Defines the shape of each book embedded inside a Library document.
 */
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, default: 0 },
});

/**
 * Parent schema:
 * Library contains an embedded array of book subdocuments.
 */
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

const Library = mongoose.model("Library", librarySchema);

/**
 * Instructor-style seed:
 * Create one sample library only if none exist.
 */
async function seedLibrary() {
  try {
    const count = await Library.countDocuments();

    if (count === 0) {
      const bookData = [
        { title: "Diary of Anne Frank", price: 10 },
        { title: "One Hundred Years of Solitude", price: 20 },
        { title: "History of Hogwarts", price: 5 },
      ];

      const created = await Library.create({
        name: "Bootcamp Library",
        books: bookData,
      });

      console.log("📚 Seeded library:", created.name);
    } else {
      console.log("ℹ️ Library already seeded. Skipping.");
    }
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
}

seedLibrary();

module.exports = Library;
