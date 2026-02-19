const mongo = require("../config/connection");
const User = require("../models/User");
const { randomFullName } = require("./data");

console.time("🌱 seed");

mongo.once("open", async () => {
  try {
    const existing = await mongo.db
      .listCollections({ name: "users" })
      .toArray();
    if (existing.length) await mongo.dropCollection("users");

    const users = [];
    for (let i = 0; i < 10; i++) {
      const [first, last] = randomFullName().split(" ");
      users.push({
        first,
        last,
        age: Math.floor(Math.random() * 80) + 18,
      });
    }

    await User.insertMany(users);

    console.table(users);
    console.timeEnd("🌱 seed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
});
