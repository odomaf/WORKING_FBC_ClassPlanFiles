const { Video, User } = require("../models");

module.exports = {
  async getVideos(req, res) {
    try {
      const videos = await Video.find().select("-__v");
      res.json(videos);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch videos", error: err.message });
    }
  },

  async getSingleVideo(req, res) {
    try {
      const video = await Video.findById(req.params.videoId).select("-__v");

      if (!video) {
        return res.status(404).json({ message: "No video found with that id" });
      }

      res.json(video);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to fetch video", error: err.message });
    }
  },

  async createVideo(req, res) {
    try {
      const video = await Video.create({
        description: req.body.description,
        published: req.body.published ?? false,
        advertiserFriendly: req.body.advertiserFriendly ?? true,
      });

      // Optional: attach video to a user if userId provided
      if (req.body.userId) {
        const user = await User.findByIdAndUpdate(
          req.body.userId,
          { $addToSet: { videos: video._id } },
          { new: true },
        );

        if (!user) {
          return res.status(404).json({
            message: "Video created, but no user found with that userId",
            videoId: video._id,
          });
        }
      }

      res.status(201).json({ message: "Video created 🎥", videoId: video._id });
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to create video", error: err.message });
    }
  },

  async updateVideo(req, res) {
    try {
      const video = await Video.findByIdAndUpdate(
        req.params.videoId,
        { $set: req.body },
        { runValidators: true, new: true },
      );

      if (!video) {
        return res.status(404).json({ message: "No video found with that id" });
      }

      res.json(video);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to update video", error: err.message });
    }
  },

  async deleteVideo(req, res) {
    try {
      const video = await Video.findByIdAndDelete(req.params.videoId);

      if (!video) {
        return res.status(404).json({ message: "No video found with that id" });
      }

      // Remove from any user that referenced it
      await User.findOneAndUpdate(
        { videos: req.params.videoId },
        { $pull: { videos: req.params.videoId } },
        { new: true },
      );

      res.json({ message: "Video deleted 🗑️" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to delete video", error: err.message });
    }
  },

  // ✅ Create a subdocument inside responses[]
  async addVideoResponse(req, res) {
    try {
      const video = await Video.findByIdAndUpdate(
        req.params.videoId,
        { $addToSet: { responses: req.body } },
        { runValidators: true, new: true },
      );

      if (!video) {
        return res.status(404).json({ message: "No video found with that id" });
      }

      res.json(video);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to add response", error: err.message });
    }
  },

  // ✅ Remove a subdocument from responses[] by responseId
  async removeVideoResponse(req, res) {
    try {
      const video = await Video.findByIdAndUpdate(
        req.params.videoId,
        { $pull: { responses: { responseId: req.params.responseId } } },
        { runValidators: true, new: true },
      );

      if (!video) {
        return res.status(404).json({ message: "No video found with that id" });
      }

      res.json(video);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Failed to remove response", error: err.message });
    }
  },
};
