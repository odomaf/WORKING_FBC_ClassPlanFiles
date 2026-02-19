const mongo = require("../config/connection");
const { User, Post } = require("../models");
const { randomFullName, randomPostText } = require("./data");

console.time("🌱 seed");

mongo.once("open", async () => {
  try {
    const collections = await mongo.db.listCollections().toArray();
    const names = collections.map((c) => c.name);

    if (names.includes("posts")) await mongo.dropCollection("posts");
    if (names.includes("users")) await mongo.dropCollection("users");

    // Create users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const [first, last] = randomFullName().split(" ");
      users.push({
        first,
        last,
        age: Math.floor(Math.random() * 50) + 18,
      });
    }
    const userDocs = await User.insertMany(users);

    // Create posts and attach to random users
    const posts = [];
    for (let i = 0; i < 20; i++) {
      posts.push({
        text: randomPostText(),
        published: Math.random() > 0.5,
        meta: {
          upvotes: Math.floor(Math.random() * 50),
          bookmarks: Math.floor(Math.random() * 10),
        },
      });
    }
    const postDocs = await Post.insertMany(posts);

    // Attach posts to users
    for (const post of postDocs) {
      const randomUser = userDocs[Math.floor(Math.random() * userDocs.length)];
      await User.findByIdAndUpdate(randomUser._id, {
        $addToSet: { posts: post._id },
      });
    }

    console.log(
      `✅ Seeded ${userDocs.length} users and ${postDocs.length} posts`,
    );
    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
