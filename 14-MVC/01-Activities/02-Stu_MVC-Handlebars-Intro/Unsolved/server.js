// ? Dependencies
// Import the libraries needed to build and run the server
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Create a Handlebars instance that Express can use
const hbs = exphbs.create({});

// ? Sets up the Express App
// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Register Handlebars as the template engine for the app.
// This tells Express how to process .handlebars files
// and convert them into HTML pages.
app.engine("handlebars", hbs.engine);

// Set Handlebars as the default view engine.
// When res.render() is called, Express will use Handlebars
// to generate the HTML sent to the browser.
app.set("view engine", "handlebars");

// Serve static files (CSS, images, client-side JS) from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Load the application routes from the controllers folder
app.use(require("./controllers/dish-routes"));

// ? Starts the server to begin listening
// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`🌐 Server listening on http://localhost:${PORT}`);
});
