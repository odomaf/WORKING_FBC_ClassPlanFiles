const db = require("../config/connection");
const cleanDB = require("./cleanDB");
const { Tool, Battle } = require("../models");

const toolData = require("./toolData.json");

// Pair battles by tool name
const battlePairs = [
  ["Tailwind CSS", "Bootstrap"],
  ["GitHub Actions", "GitLab CI"],
  ["Jest", "Vitest"],
  ["MongoDB", "PostgreSQL"],
  ["React", "Vue"],
];

db.once("open", async () => {
  try {
    // These are the actual Mongo collection names
    await cleanDB("Battle", "battles");
    await cleanDB("Tool", "tools");

    const tools = await Tool.insertMany(toolData);

    // Create a quick lookup map: name -> _id
    const toolMap = new Map(tools.map((t) => [t.name, t._id]));

    // Create battles using tool ObjectIds
    const battlesToCreate = battlePairs
      .map(([a, b]) => {
        const tool1 = toolMap.get(a);
        const tool2 = toolMap.get(b);
        if (!tool1 || !tool2) return null;

        return {
          tool1,
          tool2,
          tool1Votes: 0,
          tool2Votes: 0,
        };
      })
      .filter(Boolean);

    await Battle.insertMany(battlesToCreate);

    console.log("✅ Tools + Battles seeded!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
