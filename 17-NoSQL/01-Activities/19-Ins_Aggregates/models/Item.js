const mongoose = require("mongoose");

/**
 * Item schema:
 * Minimal fields needed for aggregate demo.
 */
const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  price: { type: Number, default: 0 },
});

const Item = mongoose.model("Item", itemSchema);

/**
 * Instructor demo seed:
 * Insert starter items only if the collection is empty.
 */
async function seedItems() {
  try {
    const count = await Item.countDocuments();

    if (count === 0) {
      const inserted = await Item.insertMany([
        { item: "banana", price: 1 },
        { item: "pear", price: 2 },
        { item: "apple", price: 3 },
        { item: "ice cream", price: 5 },
        { item: "bread", price: 2 },
        { item: "cheddar cheese", price: 4 },
        { item: "hot dogs", price: 8 },
        { item: "lettuce", price: 2 },
        { item: "snack cake", price: 4 },
        { item: "wine", price: 10 },
      ]);

      console.log(`📦 Seeded ${inserted.length} items for aggregate demo`);
    } else {
      console.log("ℹ️ Items already seeded. Skipping.");
    }
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
}

seedItems();

module.exports = Item;
