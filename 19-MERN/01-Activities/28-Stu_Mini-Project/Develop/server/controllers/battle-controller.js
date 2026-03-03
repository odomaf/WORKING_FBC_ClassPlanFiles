const { Battle } = require("../models");

module.exports = {
  // POST /api/battle
  async createBattle({ body }, res) {
    try {
      const battle = await Battle.create({
        tool1: body.tool1,
        tool2: body.tool2,
      });

      const populated = await Battle.findById(battle._id)
        .populate("tool1")
        .populate("tool2");

      return res.status(200).json(populated);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unable to create battle" });
    }
  },

  // PUT /api/battle/:id  body: { toolNum: 1 | 2 }
  async createVote({ params, body }, res) {
    try {
      const toolNum = Number(body.toolNum);

      if (toolNum !== 1 && toolNum !== 2) {
        return res.status(400).json({ message: "toolNum must be 1 or 2" });
      }

      const incField = toolNum === 1 ? "tool1Votes" : "tool2Votes";

      const updated = await Battle.findByIdAndUpdate(
        params.id,
        { $inc: { [incField]: 1 } },
        { new: true },
      )
        .populate("tool1")
        .populate("tool2");

      if (!updated) {
        return res.status(404).json({ message: "Battle not found" });
      }

      return res.status(200).json(updated);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unable to vote on battle" });
    }
  },

  // GET /api/battle
  async getAllBattles(req, res) {
    try {
      const battles = await Battle.find({})
        .populate("tool1")
        .populate("tool2")
        .sort({ createdAt: -1 });

      return res.status(200).json(battles);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unable to fetch battles" });
    }
  },

  // GET /api/battle/:id
  async getBattle({ params }, res) {
    try {
      const battle = await Battle.findById(params.id)
        .populate("tool1")
        .populate("tool2");

      if (!battle) {
        return res.status(404).json({ message: "No battle found by that id" });
      }

      return res.status(200).json(battle);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unable to fetch battle" });
    }
  },
};
