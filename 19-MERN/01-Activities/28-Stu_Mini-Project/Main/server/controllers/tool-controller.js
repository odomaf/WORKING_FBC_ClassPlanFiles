const { Tool } = require('../models');

module.exports = {
  async getAllTool(req, res) {
    const allTool = await Tool.find({});

    if (!allTool) {
      return res.status(400).json({ message: 'No toolnologies found' });
    }
    res.status(200).json(allTool);
  },
};
