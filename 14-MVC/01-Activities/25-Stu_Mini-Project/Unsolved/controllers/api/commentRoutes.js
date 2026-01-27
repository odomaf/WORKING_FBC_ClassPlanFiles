const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// TODO: Create comment (protected)
router.post("/", withAuth, async (req, res) => {
  // TODO
});

module.exports = router;
