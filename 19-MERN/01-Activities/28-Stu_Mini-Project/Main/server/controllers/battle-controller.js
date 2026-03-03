const { Battle } = require('../models');

module.exports = {
  async createBattle({ body }, res) {
    const battle = await Battle.create(body);

    if (!battle) {
      return res.status(400).json({ message: 'Unable to create battle' });
    }

    res.status(200).json(battle);
  },
  async createVote(req, res) {
    const vote = await Battle.findOneAndUpdate(
      { _id: req.body.id },
      { $inc: { [`tool${req.body.toolNum}_votes`]: 1 } },
      { new: true }
    );

    if (!vote) {
      return res.status(400).json({ message: 'Unable to vote on battle' });
    }

    res.status(200).json(vote);
  },
  async getAllBattles(req, res) {
    const allBattles = await Battle.find({});

    if (!allBattles) {
      return res.status(400).json({ message: 'No battles found' });
    }

    res.status(200).json(allBattles);
  },
  async getBattle({ params }, res) {
    const battle = await Battle.findOne({ _id: params.id });

    if (!battle) {
      return res.status(400).json({ message: 'No battle found by that id' });
    }

    res.status(200).json(battle);
  },
};
