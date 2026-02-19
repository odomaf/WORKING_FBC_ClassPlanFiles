const { Application, User } = require("../models");

module.exports = {
  /**
   * READ (All)
   * - Application.find() returns every Application document
   * - res.json sends back the results to the client
   */
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

  /**
   * READ (One)
   * - Find a single Application by its id
   * - If no matching document exists, return 404
   */
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

  /**
   * CREATE
   * - Create a new Application document from req.body
   * - Then attach that application id to the User who created it
   *   using $addToSet (prevents duplicates)
   */
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

  /**
   * UPDATE
   * - Update one Application using $set to overwrite fields from req.body
   * - runValidators ensures schema rules still apply during update
   * - new: true returns the updated document
   */
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

  /**
   * DELETE
   * - Delete the Application document
   * - Then remove that application id from the User.applications array using $pull
   */
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

      // User might already be deleted; we still successfully deleted the application
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

  /**
   * SUBDOCUMENT CREATE (Tags)
   * - Add a tag subdocument object to Application.tags
   * - $addToSet avoids duplicates (if the exact subdoc matches)
   */
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

  /**
   * SUBDOCUMENT DELETE (Tags)
   * - Remove a tag subdocument from Application.tags using $pull
   * - We match by tagId (custom id stored on each tag subdoc)
   */
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
