const router = require("express").Router();
const {
  getStudents,
  getSingleStudent,
  createStudent,
  deleteStudent,
} = require("../../controllers/studentController");

router.route("/").get(getStudents).post(createStudent);
router.route("/:studentId").get(getSingleStudent).delete(deleteStudent);

module.exports = router;
