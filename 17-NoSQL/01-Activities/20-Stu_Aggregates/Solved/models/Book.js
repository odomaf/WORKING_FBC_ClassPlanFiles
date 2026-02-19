const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
  inStock: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

async function seedBooks() {
  const count = await Book.countDocuments();

  if (count === 0) {
    await Book.insertMany([
      { title: "Intro to Node", price: 5, inStock: true },
      { title: "Advanced MongoDB", price: 10, inStock: false },
      { title: "Fullstack Patterns", price: 7, inStock: true },
      { title: "Scaling APIs", price: 20, inStock: true },
      { title: "Legacy Code Nightmares", price: 2, inStock: false },
      { title: "Clean Architecture", price: 25, inStock: false },
      { title: "Async JavaScript", price: 4, inStock: true },
    ]);

    console.log("📚 Seeded books for aggregate activity");
  }
}

seedBooks();

module.exports = Book;
