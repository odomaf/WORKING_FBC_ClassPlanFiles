const mongo = require("../config/connection");
const { User, Video } = require("../models");
const { randomFullName, makeVideos } = require("./data");

console.time("🌱 seed");

mongo.once("open", async () => {
  try {
    await mongo.dropDatabase();

    // Users
    const users = [];
    for (let i = 0; i < 8; i++) {
      const [first, last] = randomFullName().split(" ");
      users.push({
        first,
        last,
        age: Math.floor(Math.random() * 50) + 18,
      });
    }
    const userDocs = await User.insertMany(users);

    // Videos
    const videoDocs = await Video.insertMany(makeVideos(10));

    // Associate videos to random users (so you can demo relations too)
    for (const video of videoDocs) {
      const randomUser = userDocs[Math.floor(Math.random() * userDocs.length)];
      await User.findByIdAndUpdate(randomUser._id, {
        $addToSet: { videos: video._id },
      });
    }

    console.log(
      `✅ Seeded ${userDocs.length} users + ${videoDocs.length} videos`,
    );
    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
