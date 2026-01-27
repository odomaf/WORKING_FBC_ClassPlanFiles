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

const sessionConfig = {
  secret: process.env.SESSION_SECRET || "super-secret-food-blog",
  cookie: {
    maxAge: Number(process.env.SESSION_MAX_AGE_MS || 300000),
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  },
  resave: false,
  saveUninitialized: false,
  rolling: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`🌐 Server listening on http://localhost:${PORT}`),
  );
});
