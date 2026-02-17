const mongoose = require("mongoose");

/**
 * Schema: defines the shape and rules for each document
 */
const itemSchema = new mongoose.Schema({
  // required: true disallows null/undefined for this field
  item: { type: String, required: true },

  stockCount: { type: Number, default: 0 },
  price: { type: Number, default: 0 },

  // inStock can be derived logically, but here we store it directly for demo
  inStock: { type: Boolean, default: false },

  // default: Date.now stores the timestamp when the document is created
  lastAccessed: { type: Date, default: Date.now },
});

/**
 * Model: compiled from the schema
 * - First arg: model name (Mongoose also uses this to create the collection name)
 * - Second arg: schema to enforce for documents
 */
const Item = mongoose.model("Item", itemSchema);

/**
 * Instructor demo seeding:
 * Create a sample document on server start if it doesn't exist.
 * This keeps the demo repeatable and avoids infinite duplicates.
 */
async function seedDemoItem() {
  try {
    const existing = await Item.findOne({ item: "banana" });

    if (!existing) {
      const created = await Item.create({
        item: "banana",
        stockCount: 10,
        price: 1,
        inStock: true,
      });
      console.log("📦 Seeded demo item:", created);
    } else {
      console.log("ℹ️ Demo item already exists (banana). Skipping seed.");
    }
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
}

seedDemoItem();

module.exports = Item;
