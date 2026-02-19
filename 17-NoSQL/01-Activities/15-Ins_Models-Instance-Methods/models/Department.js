const mongoose = require("mongoose");

/**
 * Schema:
 * Defines the shape of documents stored in the collection.
 */
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalStock: { type: Number, default: 0 },
  lastAccessed: { type: Date, default: Date.now },
});

/**
 * Instance Method (Custom):
 * Instance methods live on documents created from the model.
 * Use a regular function() (not an arrow function) so `this` correctly
 * refers to the document instance.
 */
departmentSchema.methods.getSummary = function () {
  return `Department "${this.name}" has totalStock=${this.totalStock}`;
};

/**
 * Model:
 * Compiled from the schema. Each document instance inherits:
 * - schema fields
 * - schema methods
 * - built-in Mongoose document methods (get, set, save, validate, etc.)
 */
const Department = mongoose.model("Department", departmentSchema);

/**
 * Instructor Demo (In-memory document instance):
 * This creates a document instance in memory (not saved to MongoDB).
 */
const produce = new Department({ name: "Produce", totalStock: 100 });

/**
 * Built-in instance method: get(path, [type])
 * Here we read totalStock and cast it to a String.
 */
const totalStockAsString = produce.get("totalStock", String);
console.log(
  `Built-in get(): totalStock as a string -> "${totalStockAsString}"`,
);

/**
 * Custom instance method: getSummary()
 */
console.log(`Custom instance method: ${produce.getSummary()}`);

module.exports = Department;
