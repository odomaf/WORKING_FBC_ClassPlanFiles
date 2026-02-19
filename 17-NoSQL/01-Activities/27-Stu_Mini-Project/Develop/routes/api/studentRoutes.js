const router = require("express").Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  addAssignment,
  updateAssignment,
  deleteAssignment,
} = require("../../controllers/studentController");

router.route("/").get(getStudents).post(createStudent);

router
  .route("/:studentId")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

// Assignments (subdocuments on Student)
router.route("/:studentId/assignments").post(addAssignment);

router
  .route("/:studentId/assignments/:assignmentId")
  .put(updateAssignment)
  .delete(deleteAssignment);

module.exports = router;
