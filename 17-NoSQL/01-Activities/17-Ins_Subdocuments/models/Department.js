const mongoose = require("mongoose");

/**
 * Subdocument schemas:
 * These define the shape of embedded "child" documents.
 * They do not become their own top-level collection unless you model them separately.
 */

// Manager schema (single embedded object)
const managerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, default: 0 },
});

// Employee schema (used in an array of embedded objects)
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, default: 0 },
});

/**
 * Parent schema:
 * Includes embedded subdocuments for manager + employees.
 */
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },

  // One-to-one: single embedded subdocument
  manager: managerSchema,

  // One-to-many: array of embedded subdocuments
  employees: [employeeSchema],

  lastAccessed: { type: Date, default: Date.now },
});

const Department = mongoose.model("Department", departmentSchema);

/**
 * Instructor Demo Seed:
 * Insert one sample department only if none exist (repeatable demo).
 */
async function seedDepartment() {
  try {
    const count = await Department.countDocuments();

    if (count === 0) {
      const created = await Department.create({
        name: "Engineering",
        manager: { name: "Taylor", salary: 80000 },
        employees: [
          { name: "Ann", salary: 40000 },
          { name: "Liu", salary: 50000 },
        ],
      });

      console.log("📦 Seeded department with subdocuments:", created.name);
    } else {
      console.log("ℹ️ Departments already seeded. Skipping.");
    }
  } catch (err) {
    console.error("❌ Seed error:", err.message);
  }
}

seedDepartment();

module.exports = Department;
