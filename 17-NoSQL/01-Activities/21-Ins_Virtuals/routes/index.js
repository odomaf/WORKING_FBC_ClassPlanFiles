const router = require("express").Router();
const api = require("./api");

router.use("/api", api);

router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
