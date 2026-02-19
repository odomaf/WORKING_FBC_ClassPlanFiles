const { Types } = require("mongoose");
const { Student, Course } = require("../models");

/**
 * TODO (Aggregation #1):
 * Return the total number of students using aggregate operators.
 * Suggested operators: $count
 */
const headCount = async () => {
  // TODO: Replace this placeholder with an aggregation pipeline.
  // const result = await Student.aggregate([...]);
  // return result[0]?.studentCount ?? 0;
  return null;
};

/**
 * TODO (Aggregation #2):
 * Return a single student + their overall grade using aggregation operators.
 * Suggested operators: $match, $unwind, $group, $avg
 * NOTE: studentId must be converted to ObjectId
 */
const grade = async (studentId) => {
  // TODO: Replace this placeholder with an aggregation pipeline.
  // return Student.aggregate([...]);
  return [];
};

module.exports = {
  // READ all students + headcount (TODO)
  async getStudents(req, res) {
    try {
      const students = await Student.find().select("-__v");

      return res.json({
        students,
        headCount: await headCount(), // TODO should return a number
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch students", error: err.message });
    }
  },

  // READ one student + grade analytics (TODO)
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
        analytics: gradeResult[0] ?? { overallGrade: null, assignments: [] }, // TODO should be real
      });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to fetch student", error: err.message });
    }
  },

  // CREATE student
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

  // UPDATE student
  async updateStudent(req, res) {
    try {
      const updated = await Student.findByIdAndUpdate(
        req.params.studentId,
        { $set: req.body },
        { runValidators: true, new: true },
      );

      if (!updated) {
        return res
          .status(404)
          .json({ message: "No student found with that id" });
      }

      return res.json(updated);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to update student", error: err.message });
    }
  },

  // DELETE student + pull from course
  async deleteStudent(req, res) {
    try {
      const deleted = await Student.findByIdAndDelete(req.params.studentId);

      if (!deleted) {
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

  // -----------------------------
  // ASSIGNMENT SUBDOC CRUD
  // -----------------------------

  // CREATE assignment (push subdoc into assignments[])
  async addAssignment(req, res) {
    try {
      const updated = await Student.findByIdAndUpdate(
        req.params.studentId,
        { $addToSet: { assignments: req.body } },
        { runValidators: true, new: true },
      );

      if (!updated) {
        return res
          .status(404)
          .json({ message: "No student found with that id" });
      }

      return res.json(updated);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to add assignment", error: err.message });
    }
  },

  // UPDATE assignment (match assignmentId then set fields)
  async updateAssignment(req, res) {
    try {
      const studentId = req.params.studentId;
      const assignmentId = req.params.assignmentId;

      const updated = await Student.findOneAndUpdate(
        {
          _id: new Types.ObjectId(studentId),
          "assignments.assignmentId": new Types.ObjectId(assignmentId),
        },
        {
          $set: {
            "assignments.$.assignmentName": req.body.assignmentName,
            "assignments.$.score": req.body.score,
          },
        },
        { runValidators: true, new: true },
      );

      if (!updated) {
        return res
          .status(404)
          .json({ message: "Student or assignment not found" });
      }

      return res.json(updated);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to update assignment", error: err.message });
    }
  },

  // DELETE assignment (pull subdoc by assignmentId)
  async deleteAssignment(req, res) {
    try {
      const updated = await Student.findByIdAndUpdate(
        req.params.studentId,
        {
          $pull: {
            assignments: {
              assignmentId: new Types.ObjectId(req.params.assignmentId),
            },
          },
        },
        { runValidators: true, new: true },
      );

      if (!updated) {
        return res
          .status(404)
          .json({ message: "Student or assignment not found" });
      }

      return res.json(updated);
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Failed to delete assignment", error: err.message });
    }
  },
};
