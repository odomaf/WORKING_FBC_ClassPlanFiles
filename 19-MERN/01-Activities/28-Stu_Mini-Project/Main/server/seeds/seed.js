const db = require("../config/connection");
const { Tool, Battle } = require("../models");
const cleanDB = require("./cleanDB");

const toolData = require("./toolData.json");

db.once("open", async () => {
  try {
    await cleanDB("Battle", "battles");
    await cleanDB("Tool", "tools");

    // 1) Seed tools
    const tools = await Tool.insertMany(toolData);

    // Helper to find tool by name (exact match)
    const byName = (name) => tools.find((t) => t.name === name)?._id;

    // 2) Seed sample battles
    const battleSeed = [
      {
        tool1: byName("React"),
        tool2: byName("Vue"),
        tool1Votes: 0,
        tool2Votes: 0,
      },
      {
        tool1: byName("MongoDB"),
        tool2: byName("PostgreSQL"),
        tool1Votes: 0,
        tool2Votes: 0,
      },
      {
        tool1: byName("Jest"),
        tool2: byName("Vitest"),
        tool1Votes: 0,
        tool2Votes: 0,
      },
      {
        tool1: byName("GitHub Actions"),
        tool2: byName("GitLab CI"),
        tool1Votes: 0,
        tool2Votes: 0,
      },
      {
        tool1: byName("Tailwind CSS"),
        tool2: byName("Bootstrap"),
        tool1Votes: 0,
        tool2Votes: 0,
      },
    ].filter((b) => b.tool1 && b.tool2); // safety in case a name doesn't exist

    await Battle.insertMany(battleSeed);

    console.log("✅ Tools + Battles seeded!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
});
