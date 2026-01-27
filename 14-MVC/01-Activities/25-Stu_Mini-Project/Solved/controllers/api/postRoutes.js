const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updated = await Post.update(
      { title: req.body.title, content: req.body.content },
      { where: { id: req.params.id, user_id: req.session.user_id } },
    );

    if (!updated[0])
      return res.status(404).json({ message: "No post found for this user." });
    res.status(200).json({ message: "Updated." });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleted = await Post.destroy({
      where: { id: req.params.id, user_id: req.session.user_id },
    });
    if (!deleted)
      return res.status(404).json({ message: "No post found for this user." });
    res.status(200).json({ message: "Deleted." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
