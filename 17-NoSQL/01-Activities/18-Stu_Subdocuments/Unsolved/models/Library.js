const mongoose = require("mongoose");

/**
 * TODO:
 * Create a subdocument schema named bookSchema.
 * It must have:
 *  - title (required string)
 *  - price (number)
 */
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, default: 0 },
});

/**
 * TODO:
 * Create a parent schema named librarySchema.
 * It must have:
 *  - name (required string)
 *  - books (array of bookSchema subdocuments)
 *  - lastAccessed (default Date.now)
 */
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // One-to-many: array of embedded subdocuments
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

const Library = mongoose.model("Library", librarySchema);

/**
 * 
 * TODO:
 * Create an array of THREE book objects that match bookSchema.
 * Then create a Library document that includes those books.
 *
 * Hint: Library.create({ name: '...', books: [...] })
 */
async function seedLibrary() {
  try {
    const count = await Library.countDocuments();

    if (count === 0) {
      const created = await Library.create({
        name: "My Library",
        books: [
          { title: "Eye of the World", price: "20" },
          { title: "The Great Hunt", price: "20" },
          {title: "Lord of Chaos", price: "20"}
        ],
      });

      console.log("📦 Seeded library with books:", created.name);
    } else {
      console.log("ℹ️ Library already seeded. Skipping.");
    }
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
}

seedLibrary();

module.exports = Library;
