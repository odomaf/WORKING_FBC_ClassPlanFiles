// TODO: Identify where this file belongs in the MVC pattern
// (Model, View, or Controller) and explain what role it plays
// in handling application logic.

const router = require("express").Router();

// TODO: Describe what this GET route is responsible for when
// a request is made to this path.
router.get("/", async (req, res) => {
  // TODO: Explain what calling the render method does and how
  // it affects what the user sees in the browser.
  res.render("all");
});

module.exports = router;
