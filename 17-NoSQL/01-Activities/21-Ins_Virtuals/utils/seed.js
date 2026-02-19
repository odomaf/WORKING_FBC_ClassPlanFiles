const mongo = require("../config/connection");
const { Post, Comment } = require("../models");
const { makeComments, makeSentence, pickOne } = require("./data");

console.time("🌱 seeding");

mongo.once("open", async () => {
  try {
    // Drop collections if they exist
    const collections = await mongo.db.listCollections().toArray();
    const names = collections.map((c) => c.name);

    if (names.includes("posts")) await mongo.dropCollection("posts");
    if (names.includes("comments")) await mongo.dropCollection("comments");

    // Create comments first so we have ids to reference
    const commentDocs = await Comment.insertMany(makeComments(10));

    // Create posts that reference one random comment each
    const postDocs = [];
    for (let i = 0; i < commentDocs.length; i++) {
      postDocs.push({
        text: makeSentence(10),
        username: pickOne([
          "Aaran",
          "Alex",
          "Grace",
          "Jared",
          "Sarah",
          "Parker",
        ]),
        comments: [pickOne(commentDocs)._id],
      });
    }

    await Post.insertMany(postDocs);

    console.table(
      commentDocs.map((c) => ({
        id: String(c._id),
        username: c.username,
        text: c.text,
      })),
    );
    console.table(
      postDocs.map((p) => ({
        username: p.username,
        text: p.text,
        comments: p.comments.map(String),
      })),
    );

    console.timeEnd("🌱 seeding");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
