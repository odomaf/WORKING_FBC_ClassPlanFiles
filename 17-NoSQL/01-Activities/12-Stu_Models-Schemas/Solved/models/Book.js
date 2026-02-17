const mongoose = require("mongoose");

/**
 * Schema:
 * Defines the structure (shape) of documents in the collection
 * plus validation rules, defaults, and type casting.
 */
const bookSchema = new mongoose.Schema({
  /**
   * title is required. If it is missing, Mongoose validation will fail
   * and the document will not be saved.
   */
  title: { type: String, required: true },

  /**
   * author is optional (required is false by default).
   * If you omit it, Mongoose will still allow the document to be created.
   */
  author: { type: String, required: false },

  /**
   * When you define a field as just "String", it is optional by default.
   * This field can be omitted or set to null/undefined without failing validation.
   */
  publisher: String,

  // Basic numeric fields
  stockCount: Number,
  price: Number,

  // Boolean flag (useful for filters like inStock: true)
  inStock: Boolean,

  /**
   * default: Date.now stores the timestamp when the document is created.
   * This is helpful for tracking last access or last update time.
   */
  lastAccessed: { type: Date, default: Date.now },
});

/**
 * Model:
 * A compiled version of the schema that gives us methods like:
 * - Book.find()
 * - Book.create()
 * - Book.findById()
 * - Book.updateOne()
 *
 * The first argument 'Book' becomes the model name.
 * Mongoose will pluralize it for the collection name (usually "books").
 */
const Book = mongoose.model("Book", bookSchema);

/**
 * Helper to log errors consistently during the demo.
 */
const handleError = (err) => console.error("❌ Book model error:", err.message);

/**
 * Demo seed:
 * For instructor demos, it's helpful to insert sample documents automatically.
 * This also shows how schema validation behaves:
 *  - one doc with full fields
 *  - one doc with only required fields
 */
async function seedDemoBooks() {
  try {
    // Avoid inserting duplicates every time by checking one known title
    const alreadySeeded = await Book.findOne({ title: "Diary of Anne Frank" });

    if (alreadySeeded) {
      console.log("ℹ️ Demo books already seeded. Skipping.");
      return;
    }

    await Book.create({
      title: "Diary of Anne Frank",
      author: "Anne Frank",
      publisher: "Scholastic",
      stockCount: 10,
      price: 10,
      inStock: true,
    });

    await Book.create({
      title: "Oh the Places You Will Go!",
      author: "Dr. Seuss",
    });

    await Book.create({
      title: "Harold and the Purple Crayon",
    });

    console.log("📚 Seeded demo books successfully.");
  } catch (err) {
    handleError(err);
  }
}

seedDemoBooks();

module.exports = Book;
