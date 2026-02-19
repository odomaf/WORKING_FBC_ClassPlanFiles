const { Types } = require("mongoose");
const { Student, Course } = require("../models");

const headCount = async () => {
  const result = await Student.aggregate([{ $count: "studentCount" }]);
  return result[0]?.studentCount ?? 0;
};

const grade = async (studentId) =>
  Student.aggregate([
    { $match: { _id: new Types.ObjectId(studentId) } },

    // explode assignments so $avg can compute across scores
    { $unwind: "$assignments" },

    // group back into one row: compute avg + rebuild assignment list
    {
      $group: {
        _id: "$_id",
        overallGrade: { $avg: "$assignments.score" },
        assignments: { $push: "$assignments" },
      },
    },
  ]);

module.exports = {
  // GET /api/students
  async getStudents(req, res) {
    try {
      const students = await Student.find().select("-__v");

      return res.json({
        students,
        headCount: await headCount(),
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch students", error: err.message });
    }
  },

  // GET /api/students/:studentId
  async getSingleStudent(req, res) {
    try {
      const student = await Student.findById(req.params.studentId).select(
        "-__v",
      );

      if (!student) {
        return res
          .status(404)
          .json({ message: "No student found with that id" });
      }

      const gradeResult = await grade(req.params.studentId);

      return res.json({
        student,
        analytics: gradeResult[0] ?? { overallGrade: null, assignments: [] },
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch student", error: err.message });
    }
  },

  // POST /api/students
  async createStudent(req, res) {
    try {
      const created = await Student.create(req.body);
      return res.status(201).json(created);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to create student", error: err.message });
    }
  },

  // DELETE /api/students/:studentId
  async deleteStudent(req, res) {
    try {
      const student = await Student.findByIdAndDelete(req.params.studentId);

      if (!student) {
        return res
          .status(404)
          .json({ message: "No student found with that id" });
      }

      await Course.findOneAndUpdate(
        { students: req.params.studentId },
        { $pull: { students: req.params.studentId } },
        { new: true },
      );

      return res.json({ message: "Student deleted 🗑️" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to delete student", error: err.message });
    }
  },
};
