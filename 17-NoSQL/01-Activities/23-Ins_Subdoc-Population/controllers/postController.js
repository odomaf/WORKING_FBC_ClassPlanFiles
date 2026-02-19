const { Post, User } = require("../models");

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch posts", error: err.message });
    }
  },

  async getSinglePost(req, res) {
    try {
      const post = await Post.findById(req.params.postId);

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
      const post = await Post.create({
        text: req.body.text,
        published: req.body.published ?? false,
        meta: req.body.meta,
      });

      // Optional: attach post to user if userId is provided
      if (req.body.userId) {
        const user = await User.findByIdAndUpdate(
          req.body.userId,
          { $addToSet: { posts: post._id } },
          { new: true },
        );

        if (!user) {
          return res.status(404).json({
            message: "Post created, but no user found with that userId",
            postId: post._id,
          });
        }
      }

      res.status(201).json({ message: "Post created 🎉", postId: post._id });
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to create post", error: err.message });
    }
  },
};
