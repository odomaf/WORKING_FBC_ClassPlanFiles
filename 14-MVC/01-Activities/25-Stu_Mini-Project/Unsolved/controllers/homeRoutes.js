const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// TODO: Homepage route
router.get("/", async (req, res) => {
  // TODO
});

// TODO: Single post route
router.get("/post/:id", async (req, res) => {
  // TODO
});

// TODO: Dashboard route (protected)
router.get("/dashboard", withAuth, async (req, res) => {
  // TODO
});

// TODO: Edit post route (protected)
router.get("/dashboard/edit/:id", withAuth, async (req, res) => {
  // TODO
});

// Login route (redirect if logged in)
router.get("/login", (req, res) => {
  if (req.session.logged_in) return res.redirect("/dashboard");
  res.render("login");
});

module.exports = router;
