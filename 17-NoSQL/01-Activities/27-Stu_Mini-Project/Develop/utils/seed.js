const mongo = require("../config/connection");
const { Course, Student } = require("../models");
const { randomName, randomAssignments } = require("./data");

console.time("🌱 seed");

mongo.on("error", (err) => console.error("❌ MongoDB connection error:", err));

mongo.once("open", async () => {
  try {
    console.log("✅ MongoDB connected (seeding...)");

    await mongo.dropDatabase();

    const students = [];
    for (let i = 0; i < 20; i++) {
      const [first, last] = randomName().split(" ");
      const github = `${first}${Math.floor(Math.random() * 900 + 100)}`;

      students.push({
        first,
        last,
        github,
        assignments: randomAssignments(10),
      });
    }

    const studentDocs = await Student.insertMany(students);

    await Course.create({
      courseName: "Codeacademy Bootcamp — Module 18",
      inPerson: false,
      students: studentDocs.map((s) => s._id),
    });

    console.log(`✅ Seeded ${studentDocs.length} students + 1 course`);
    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
