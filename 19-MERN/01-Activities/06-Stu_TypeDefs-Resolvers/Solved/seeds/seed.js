/**
 * seeds/index.js
 * ------------------------------------------------------------
 * CodeAcademy – Unit 19 (MERN + GraphQL)
 *
 * PURPOSE:
 * This script "seeds" (loads) demo data into MongoDB so we have
 * something to query in GraphQL right away.
 *
 * WHAT IT DOES (high-level):
 * 1) Connects to MongoDB
 * 2) Wipes the target collections (clean slate)
 * 3) Inserts Schools, Classes, and Professors from JSON files
 * 4) Creates relationships:
 *    - Each Class is assigned to a random School
 *    - Each Class is assigned a random Professor
 *    - Each Professor also stores a reference to the Classes they teach
 *
 * WHY THIS MATTERS:
 * In GraphQL, relationships are everything. Seed data with references
 * makes it easy to demo nested queries like:
 * - school { classes { professor { name } } }
 * - professor { classes { name } }
 */

const db = require("../config/connection");
const { School, Class, Professor } = require("../models");
const cleanDB = require("./cleanDB");

// JSON seed data (simple objects: no Mongo IDs yet)
const schoolData = require("./schoolData.json");
const classData = require("./classData.json");
const professorData = require("./professorData.json");

/**
 * NOTE:
 * db.once('open') waits until Mongoose has connected to the database.
 * Only then do we run the seed steps (clean -> create -> link).
 */
db.once("open", async () => {
  try {
    // ------------------------------------------------------------
    // 1) CLEAN DATABASE (wipe existing data so the seed is repeatable)
    // ------------------------------------------------------------
    // cleanDB(modelName, collectionName)
    // The collection name must match the actual Mongo collection.
    await cleanDB("School", "schools");
    await cleanDB("Class", "classes");
    await cleanDB("Professor", "professors");

    // ------------------------------------------------------------
    // 2) INSERT BASE DOCUMENTS
    // ------------------------------------------------------------
    // These create() calls return arrays of newly created documents.
    // At this point, there are NO relationships yet.
    const schools = await School.create(schoolData);
    const classes = await Class.create(classData);
    const professors = await Professor.create(professorData);

    // ------------------------------------------------------------
    // 3) BUILD RELATIONSHIPS (random assignments)
    // ------------------------------------------------------------
    // For each class:
    // - pick a random school and add this class ID to that school's `classes` array
    // - pick a random professor and set class.professor = professor ID
    // - also add this class ID to professor.classes (two-way reference)
    //
    // This creates realistic nested query behavior in GraphQL.
    for (const newClass of classes) {
      // --- A) Assign class to a random school (School -> Classes)
      const tempSchool = schools[Math.floor(Math.random() * schools.length)];

      // `classes` is an array of ObjectIds on the School model
      tempSchool.classes.push(newClass._id);
      await tempSchool.save();

      // --- B) Assign a random professor to this class (Class -> Professor)
      const tempProfessor =
        professors[Math.floor(Math.random() * professors.length)];

      // `professor` is an ObjectId field on the Class model
      newClass.professor = tempProfessor._id;
      await newClass.save();

      // --- C) Add class reference on the professor side too (Professor -> Classes)
      // This makes it easy to query "what classes does this professor teach?"
      tempProfessor.classes.push(newClass._id);
      await tempProfessor.save();
    }

    console.log(
      "✅ Seed complete: schools, classes, and professors are loaded.",
    );
    process.exit(0);
  } catch (err) {
    // If anything fails, log it clearly and exit with a non-zero status code
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
