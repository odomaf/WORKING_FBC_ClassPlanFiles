const router = require("express").Router();
const post = require("../../controllers/postController");

// /api/posts
router.route("/").get(post.getAll).post(post.create);

// /api/posts/:postId
router.route("/:postId").get(post.getById);

module.exports = router;
