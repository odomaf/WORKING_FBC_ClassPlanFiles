const mongo = require("../config/connection");
const { Post, Tag } = require("../models");

console.time("🌱 seed");

mongo.once("open", async () => {
  try {
    await mongo.dropDatabase();

    const tags = await Tag.insertMany([
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Debugging" },
    ]);

    await Post.insertMany([
      {
        title: "Why populate matters",
        content:
          "Populate replaces ObjectIds with full documents so the client has richer data.",
        tags: [tags[0]._id, tags[1]._id],
      },
    ]);

    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
