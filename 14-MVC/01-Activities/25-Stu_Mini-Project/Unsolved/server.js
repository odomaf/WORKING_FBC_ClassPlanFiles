const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

require("dotenv").config();
const sequelize = require("./config/connection");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// TODO: Build a sessionConfig object
const sessionConfig = {
  // TODO
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// TODO: Use the session middleware with sessionConfig

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// TODO: Sync sequelize and start listening on PORT
