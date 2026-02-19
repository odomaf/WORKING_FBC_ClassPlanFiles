const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Department = mongoose.model("Department", departmentSchema);

/**
 * Instructor Demo Seed:
 * Insert starter departments only if the collection is empty.
 * Note: duplicates are intentionally allowed here to demonstrate why unique constraints matter.
 */
async function seedDepartments() {
  try {
    const existingCount = await Department.countDocuments();

    if (existingCount === 0) {
      const results = await Department.insertMany([
        { name: "Produce" },
        { name: "Dairy" },
        { name: "Meat" },
        { name: "Bakery" },
        { name: "Bakery" },
        { name: "Bakery" },
        { name: "Floral" },
      ]);

      console.log(
        "📦 Seeded departments:",
        results.map((d) => d.name),
      );
    } else {
      console.log("ℹ️ Departments already seeded. Skipping.");
    }
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
}

seedDepartments();

module.exports = Department;
