const mongo = require("../config/connection");
const { User, Application } = require("../models");
const { randomUser, randomApplications } = require("./data");

console.time("🌱 seed");

mongo.on("error", (err) => console.error("❌ MongoDB connection error:", err));

mongo.once("open", async () => {
  try {
    console.log("✅ MongoDB connected (seeding...)");

    // Clean reset: consistent for classroom demos
    await mongo.dropDatabase();

    // 1) Users
    const usersToCreate = Array.from({ length: 12 }, () => randomUser());
    const users = await User.insertMany(usersToCreate);

    // 2) Applications (each contains tag subdocuments)
    const appsToCreate = randomApplications(10);
    const applications = await Application.insertMany(appsToCreate);

    // 3) Associate Applications to random Users (User.applications = [ObjectId])
    for (const app of applications) {
      const owner = users[Math.floor(Math.random() * users.length)];
      await User.findByIdAndUpdate(owner._id, {
        $addToSet: { applications: app._id },
      });
    }

    console.log(`✅ Seeded ${users.length} users`);
    console.log(`✅ Seeded ${applications.length} applications`);
    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
