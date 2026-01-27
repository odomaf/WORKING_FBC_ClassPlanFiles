const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// TODO: Create post (protected)
router.post("/", withAuth, async (req, res) => {
  // TODO
});

// TODO: Update post (protected)
router.put("/:id", withAuth, async (req, res) => {
  // TODO
});

// TODO: Delete post (protected)
router.delete("/:id", withAuth, async (req, res) => {
  // TODO
});

module.exports = router;
