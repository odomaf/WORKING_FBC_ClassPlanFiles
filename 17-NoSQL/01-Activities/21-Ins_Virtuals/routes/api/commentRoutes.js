const router = require("express").Router();
const comment = require("../../controllers/commentController");

// /api/comments
router.route("/").get(comment.getAll).post(comment.createAndAttach);

// /api/comments/:commentId
router.route("/:commentId").get(comment.getById);

module.exports = router;
