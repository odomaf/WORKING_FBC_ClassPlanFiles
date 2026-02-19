const mongo = require("../config/connection");
const { Post, Tag } = require("../models");

console.time("🌱 seed");

mongo.once("open", async () => {
  try {
    await mongo.dropDatabase();

    const tags = await Tag.insertMany([
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Backend" },
    ]);

    const posts = [
      {
        title: "Understanding Populate",
        content:
          "Populate allows you to replace ObjectIds with actual documents.",
        tags: [tags[0]._id, tags[1]._id],
      },
      {
        title: "NoSQL Basics",
        content: "MongoDB stores documents instead of rows.",
        tags: [tags[2]._id],
      },
    ];

    await Post.insertMany(posts);

    console.log("✅ Seed complete");
    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
