// This file is a Controller in the MVC pattern.
// It is responsible for handling incoming HTTP requests,
// coordinating any needed data, and determining which view
// should be rendered in response.

const router = require("express").Router();

// This GET route handles requests to the root path ("/").
// When a user visits this route in the browser, the server
// executes this function to determine what response to send.
router.get("/", async (req, res) => {
  // The render method tells Express to generate an HTML page
  // using a Handlebars template. In this case, it renders the
  // "all" view and sends the resulting HTML back to the browser
  // for the user to see.
  res.render("all");
});

module.exports = router;
