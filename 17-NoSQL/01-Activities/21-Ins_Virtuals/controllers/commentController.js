const { Post, Comment } = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      const comments = await Comment.find();
      return res.json(comments);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch comments", error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const comment = await Comment.findById(req.params.commentId);

      if (!comment) {
        return res
          .status(404)
          .json({ message: "No comment found with that id" });
      }

      return res.json(comment);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch comment", error: err.message });
    }
  },

  // Creates a comment and (optionally) attaches it to a post via postId in the request body
  async createAndAttach(req, res) {
    try {
      const createdComment = await Comment.create({
        text: req.body.text,
        username: req.body.username,
      });

      // If postId is provided, attach it
      if (req.body.postId) {
        const updatedPost = await Post.findByIdAndUpdate(
          req.body.postId,
          { $push: { comments: createdComment._id } },
          { new: true },
        );

        if (!updatedPost) {
          return res.status(404).json({
            message: "Comment created, but no post found with that postId",
            commentId: createdComment._id,
          });
        }
      }

      return res.status(201).json({
        message: "Comment created",
        commentId: createdComment._id,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to create comment", error: err.message });
    }
  },
};
