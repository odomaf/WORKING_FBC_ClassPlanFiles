const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
// const routes = require("./controllers");
const helpers = require("./utils/helpers");
const db = require("./config/connection");
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Query database
app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Database error");
    }

    const users = result.rows; // <-- pg returns rows here
    console.log(users);

    res.render("homepage", { users });
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
