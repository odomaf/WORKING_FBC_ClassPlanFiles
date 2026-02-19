const { Post } = require("../models");

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find().populate("tags");
      res.json(posts);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch posts", error: err.message });
    }
  },

  async getSinglePost(req, res) {
    try {
      const post = await Post.findById(req.params.postId).populate("tags");

      if (!post) {
        return res.status(404).json({ message: "No post found with that id" });
      }

      res.json(post);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch post", error: err.message });
    }
  },

  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to create post", error: err.message });
    }
  },
};
