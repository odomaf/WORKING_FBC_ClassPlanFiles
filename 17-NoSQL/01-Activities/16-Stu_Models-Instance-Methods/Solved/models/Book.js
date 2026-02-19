const mongoose = require("mongoose");

/**
 * Schema:
 * Defines structure and validation rules for documents.
 */
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
});

/**
 * Instance Method:
 * Must use function() syntax (not arrow function)
 * so `this` refers to the document instance.
 */
bookSchema.methods.getDiscount = function () {
  const discountedPrice = this.price * 0.5;

  console.log(`📘 Book: ${this.title}`);
  console.log(`💰 Discounted Price: ${discountedPrice}`);
};

/**
 * Model:
 * Compiled constructor based on schema.
 */
const Book = mongoose.model("Book", bookSchema);

/**
 * Create a document instance (not saved to DB).
 */
const discountedBook = new Book({
  title: "Oh the Places You Will Go!",
  author: "Dr. Seuss",
  price: 100,
});

/**
 * Call custom instance method.
 */
discountedBook.getDiscount();

module.exports = Book;
