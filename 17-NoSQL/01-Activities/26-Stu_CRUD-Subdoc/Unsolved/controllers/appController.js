const { Application, User } = require("../models");

module.exports = {
  // TODO: Explain what this function does (CRUD: Read All)
  async getApplications(req, res) {
    try {
      const applications = await Application.find();
      return res.json(applications);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch applications", error: err.message });
    }
  },

  // TODO: Explain what this function does (CRUD: Read One)
  async getSingleApplication(req, res) {
    try {
      const application = await Application.findById(req.params.applicationId);

      if (!application) {
        return res
          .status(404)
          .json({ message: "No application found with that id" });
      }

      return res.json(application);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch application", error: err.message });
    }
  },

  // TODO: Explain what this function does (CRUD: Create + relationship update)
  async createApplication(req, res) {
    try {
      const application = await Application.create(req.body);

      const user = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { applications: application._id } },
        { new: true },
      );

      if (!user) {
        return res.status(404).json({
          message: "Application created, but no user found with that userId",
          applicationId: application._id,
        });
      }

      return res.status(201).json({
        message: "Application created 🎉",
        applicationId: application._id,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to create application", error: err.message });
    }
  },

  // TODO: Explain what this function does (CRUD: Update)
  async updateApplication(req, res) {
    try {
      const application = await Application.findByIdAndUpdate(
        req.params.applicationId,
        { $set: req.body },
        { runValidators: true, new: true },
      );

      if (!application) {
        return res
          .status(404)
          .json({ message: "No application found with that id" });
      }

      return res.json(application);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to update application", error: err.message });
    }
  },

  // TODO: Explain what this function does (CRUD: Delete + cleanup)
  async deleteApplication(req, res) {
    try {
      const application = await Application.findByIdAndDelete(
        req.params.applicationId,
      );

      if (!application) {
        return res
          .status(404)
          .json({ message: "No application found with that id" });
      }

      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } },
        { new: true },
      );

      if (!user) {
        return res.json({
          message: "Application deleted (no matching user to update)",
        });
      }

      return res.json({ message: "Application deleted 🗑️" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to delete application", error: err.message });
    }
  },

  // TODO: Explain what this function does (Subdocument Create)
  async addTag(req, res) {
    try {
      const application = await Application.findByIdAndUpdate(
        req.params.applicationId,
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true },
      );

      if (!application) {
        return res
          .status(404)
          .json({ message: "No application found with that id" });
      }

      return res.json(application);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to add tag", error: err.message });
    }
  },

  // TODO: Explain what this function does (Subdocument Delete)
  async removeTag(req, res) {
    try {
      const application = await Application.findByIdAndUpdate(
        req.params.applicationId,
        { $pull: { tags: { tagId: req.params.tagId } } },
        { runValidators: true, new: true },
      );

      if (!application) {
        return res
          .status(404)
          .json({ message: "No application found with that id" });
      }

      return res.json(application);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to remove tag", error: err.message });
    }
  },
};
