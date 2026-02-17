const mongoose = require("mongoose");

// TODO: Add comments explaining what a Mongoose schema does
const bookSchema = new mongoose.Schema({
  // TODO: Explain "required: true"
  title: { type: String, required: true },

  // TODO: Explain why author is optional
  author: { type: String, required: false },

  // TODO: Explain what it means when the type is written as just String
  publisher: String,

  // TODO: Explain schema types like Number and Boolean
  stockCount: Number,
  price: Number,
  inStock: Boolean,

  // TODO: Explain default values (Date.now)
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add comments explaining what a model is and what mongoose.model() does
const Book = mongoose.model("Book", bookSchema);

// Demo seed: creates sample documents for the activity
Book.create({
  title: "Diary of Anne Frank",
  author: "Anne Frank",
  publisher: "Scholastic",
  stockCount: 10,
  price: 10,
  inStock: true,
}).catch((err) => console.error(err));

Book.create({
  title: "Oh the Places You Will Go!",
  author: "Dr. Seuss",
}).catch((err) => console.error(err));

Book.create({ title: "Harold and the Purple Crayon" }).catch((err) =>
  console.error(err),
);

module.exports = Book;
