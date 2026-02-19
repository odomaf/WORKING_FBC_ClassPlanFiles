const { Course, Student } = require("../models");

module.exports = {
  async getCourses(req, res) {
    try {
      const courses = await Course.find().populate("students");
      return res.json(courses);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch courses", error: err.message });
    }
  },

  async getSingleCourse(req, res) {
    try {
      const course = await Course.findById(req.params.courseId).populate(
        "students",
      );

      if (!course) {
        return res
          .status(404)
          .json({ message: "No course found with that id" });
      }

      return res.json(course);
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch course", error: err.message });
    }
  },

  async createCourse(req, res) {
    try {
      const created = await Course.create(req.body);
      return res.status(201).json(created);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to create course", error: err.message });
    }
  },

  async updateCourse(req, res) {
    try {
      const course = await Course.findByIdAndUpdate(
        req.params.courseId,
        { $set: req.body },
        { runValidators: true, new: true },
      );

      if (!course) {
        return res
          .status(404)
          .json({ message: "No course found with that id" });
      }

      return res.json(course);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to update course", error: err.message });
    }
  },

  async deleteCourse(req, res) {
    try {
      const course = await Course.findByIdAndDelete(req.params.courseId);

      if (!course) {
        return res
          .status(404)
          .json({ message: "No course found with that id" });
      }

      // classroom-friendly cleanup
      await Student.deleteMany({ _id: { $in: course.students } });

      return res.json({ message: "Course + enrolled students deleted 🗑️" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to delete course", error: err.message });
    }
  },
};
