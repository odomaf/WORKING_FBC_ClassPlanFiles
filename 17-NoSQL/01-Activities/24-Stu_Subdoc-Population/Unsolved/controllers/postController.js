const { Post } = require("../models");

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find().populate("tags");
      return res.json(posts);
    } catch (err) {
      return res
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

      return res.json(post);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch post", error: err.message });
    }
  },

  async createPost(req, res) {
    try {
      const created = await Post.create(req.body);
      return res.status(201).json(created);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to create post", error: err.message });
    }
  },
};
