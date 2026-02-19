const User = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().select("-__v");
      res.json(users);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch users", error: err.message });
    }
  },

  async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.userId).select("-__v");

      if (!user) {
        return res.status(404).json({ message: "No user found with that id" });
      }

      res.json(user);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch user", error: err.message });
    }
  },

  async createUser(req, res) {
    try {
      const created = await User.create(req.body);
      res.status(201).json(created);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to create user", error: err.message });
    }
  },
};
