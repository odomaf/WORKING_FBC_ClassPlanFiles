const { Battle, Tool } = require("../models");

const resolvers = {
  Query: {
    battles: async () => {
      return Battle.find({})
        .populate("tool1")
        .populate("tool2")
        .sort({ _id: -1 });
    },

    battle: async (parent, { id }) => {
      return Battle.findById(id).populate("tool1").populate("tool2");
    },

    tools: async () => {
      return Tool.find({}).sort({ name: 1 });
    },
  },

  Mutation: {
    createBattle: async (parent, { tool1, tool2 }) => {
      const battle = await Battle.create({
        tool1,
        tool2,
        tool1Votes: 0,
        tool2Votes: 0,
      });

      // return populated battle so UI immediately shows names
      return Battle.findById(battle._id).populate("tool1").populate("tool2");
    },

    vote: async (parent, { battleId, toolNum }) => {
      const battle = await Battle.findById(battleId);

      if (!battle) throw new Error("Battle not found");

      if (toolNum === 1) battle.tool1Votes += 1;
      else if (toolNum === 2) battle.tool2Votes += 1;
      else throw new Error("toolNum must be 1 or 2");

      await battle.save();

      return Battle.findById(battleId).populate("tool1").populate("tool2");
    },
  },
};

module.exports = resolvers;
